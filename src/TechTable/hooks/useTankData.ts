import { useState } from "react";
import TankData from "../types/techTypes";
import axios from "axios";

function useTankData() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [data, setData] = useState<TankData>();

  const getDataFromApi = (tanksLimit = "25", pageNum = "1") => {
    setIsLoading(true);
    setIsSearching(false);
    axios
      .get(
        "https://api.tanki.su/wot/encyclopedia/vehicles/?application_id=2b0adae8aa6efcbaf9abba08c10e8a3d&" +
          "fields=nation,images.small_icon,name,type,default_profile.hp,description,price_credit,tank_id&limit=" +
          tanksLimit +
          "&page_no=" +
          pageNum
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  };

  const getSoloTank = (tankName: string) => {
    if (tankName === "") {
      getDataFromApi();
    } else {
      setIsLoading(true);
      setIsSearching(true);
      axios
        .get(
          "https://api.tanki.su/wot/encyclopedia/vehicles/?application_id=2b0adae8aa6efcbaf9abba08c10e8a3d&" +
            "fields=nation,images.small_icon,name,type,default_profile.hp,description,price_credit,tank_id"
        )
        .then((res) => {
          for (let key in res.data.data) {
            const name1N = res.data.data[key].name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase();
            const name2N = tankName
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase();
            if (!name1N.includes(name2N)) delete res.data.data[key];
          }

          setData(res.data);
          setIsLoading(false);
        });
    }
  };

  return {
    isLoading,
    isSearching,
    data,
    getDataFromApi,
    getSoloTank,
  };
}

export default useTankData;
