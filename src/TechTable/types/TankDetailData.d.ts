export default interface TankDetailData {
  [key: string]: {
    tier: number;
    images: {
      big_icon: string;
    };
    description: string;
    name: string;
  };
}
