import TankInnerData from "./TankInnerData";

export default interface TankData {
  status?: string;
  meta?: {
    count: number;
    page_total: number;
    total: number;
    limit: number;
    page: number;
  };
  data?: TankInnerData;
  error?: TankDataError;
}
