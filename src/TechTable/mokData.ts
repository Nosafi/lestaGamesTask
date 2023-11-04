import TankData from "./types/techTypes";

const getMokData = (): TankData => {
  return {
    status: "ok",
    meta: {
      count: 1,
      page_total: 812,
      total: 812,
      limit: 1,
      page: 1,
    },
    data: {
      "71": {
        description:
          "Легенда советских бронетанковых войск. Самый массовый советский танк Второй мировой войны. С 1940 по 1944 год на различных заводах СССР было изготовлено 33805 машин трёх модификаций.",
        name: "Т-34",
        nation: "ussr",
        price_credit: 356700,
        default_profile: { hp: 560 },
        images: {
          small_icon:
            "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/small/ussr-R04_T-34.png",
        },
        type: "mediumTank",
        tank_id: 71,
      },
    },
  };
};

export default getMokData;
