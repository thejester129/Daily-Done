export default interface IProgress {
  itemId: string;
  complete: boolean;
  timeComplete?: number;
  date: string; // start of week for weekly items
}
