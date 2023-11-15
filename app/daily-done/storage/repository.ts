import IBoardItem from "../models/IBoardItem";
import IProgress from "../models/IProgress";
import ITask from "../models/ITask";
import { getValue, storeValue } from "./localStorage";

export const storeKeys = {
  ITEM_BOARD: "item_board",
  PROGRESS: "progress",
};

export async function getTaskList(): Promise<ITask[]> {
  const itemBoard = await getItemBoard();
  const activeBoardItems = itemBoard.filter((x) => !x.deleted);

  const progressItems = await getProgress();

  const todayDate = "something";
  const startWeekDate = "something";

  const tasksWithProgress: ITask[] = activeBoardItems
    .map((boardItem) => {
      const progressForTask = progressItems.find((progress) =>
        progress.itemId === boardItem.id && boardItem.type === "daily"
          ? progress.date === todayDate
          : progress.date === startWeekDate
      );

      if (!progressForTask) {
        return null;
      }

      return addProgressToBoardItem(boardItem, progressForTask);
    })
    .filter((x: ITask | null) => !!x)
    .map((x) => x as ITask); // lol TS plz

  return tasksWithProgress;
}

function addProgressToBoardItem(item: IBoardItem, progress: IProgress): ITask {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    complete: progress.complete,
    totalTime: item.totalTime,
    timeDone: progress.timeComplete,
    type: item.type,
  };
}

// TODO can fetch these just as easily...

export async function getItemBoard(): Promise<IBoardItem[]> {
  const rawValue = await getValue(storeKeys.ITEM_BOARD);

  if (!rawValue) {
    return [];
  }

  return JSON.parse(rawValue) as IBoardItem[];
}

export async function getProgress(): Promise<IProgress[]> {
  const rawValue = await getValue(storeKeys.PROGRESS);

  if (!rawValue) {
    return [];
  }

  return JSON.parse(rawValue) as IProgress[];
}

export async function addBoardItem(item: IBoardItem): Promise<void> {
  const currentBoard = await getItemBoard();
  const newBoard = [...currentBoard, item];

  await storeValue(storeKeys.ITEM_BOARD, JSON.stringify(newBoard));
}

export async function updateProgress(progress: IProgress): Promise<void> {
  const currentProgressItems = await getProgress();
  let newProgressItems = currentProgressItems.filter(
    (x) => x.itemId !== progress.itemId
  );
  newProgressItems.push(progress);

  await storeValue(storeKeys.PROGRESS, JSON.stringify(newProgressItems));
}
