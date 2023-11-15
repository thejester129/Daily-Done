export default interface IBoardItem {
  id: string;
  name: string;
  description?: string;
  totalTime?: number;
  type: "daily" | "weekly";
  deleted: boolean;
}
