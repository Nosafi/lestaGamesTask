export default interface TankInnerData {
  [key: string]: {
    description: string;
    name: string;
    nation: string;
    price_credit: number;
    default_profile: {
      hp: number;
    };
    images: {
      small_icon: string;
    };
    type: string;
    tank_id: number;
  };
}
