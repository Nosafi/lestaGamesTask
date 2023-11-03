export default interface TankDataMeta {
  count: number;
  page_total: number;
  total: number;
  limit: number;
  page: number;
}

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

export default interface TankDataError {
  field: string;
  message: string;
  code: number;
  value: number;
}

export default interface TankData {
  status?: string;
  meta?: TankDataMeta;
  data?: TankInnerData;
  error?: TankDataError;
}

export default interface TankDetail extends TankData {
  data?: TankInnerData;
}
