import TankData from "./techTypes";
import TankDetailData from "./TankDetailData";

export default interface TankDetail extends TankData {
  data?: TankDetailData;
}
