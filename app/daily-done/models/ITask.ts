export default interface ITask {
  id: string;
  name: string;
  description?: string;
  complete: boolean;
  totalTime?: number;
  timeDone?: number;
  type: "daily" | "weekly";
}
