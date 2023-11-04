import css from "./TankDetailModal.module.scss";

import useTankData from "../../hooks/useTankData";
import { useEffect, useState } from "react";
import TankDetail from "../../types/TankDetail";
import Loader from "../Loader/Loader";
import TankDetailData from "../../types/TankDetailData";

interface TankDetailModalProps {
  tankDetailId: string;
  setTankDetailId: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Modal window whith a simple tank info.
 */
function TankDetailModal({
  tankDetailId,
  setTankDetailId,
}: TankDetailModalProps) {
  const modalCloser = () => {
    setTankDetailId("");
  };

  const { isLoading, getTankDetails } = useTankData();
  const [tankDetails, setTankDetails] = useState<TankDetail>();

  useEffect(() => {
    const getData = async () => {
      const data = await getTankDetails(tankDetailId);
      setTankDetails(data);
    };

    getData();
  }, []);

  return (
    <div
      className={css.tankDetailModal}
      onClick={(e) => {
        modalCloser();
      }}
    >
      <div
        className={css.tankDetailModal__content}
        data-testid="tank-detail-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {Object.keys(tankDetails?.data as TankDetailData).map((item) => {
              if (tankDetails?.data) {
                const currTank = tankDetails?.data[item];

                return (
                  <div key={"tankDetail-" + item}>
                    <div
                      className={css.tankDetailModal__content__header}
                      data-testid="tank-detail-modal-content-header"
                    >
                      <span>{currTank.name}</span>
                      <span
                        className={
                          css.tankDetailModal__content__header__closeBtn
                        }
                        onClick={() => modalCloser()}
                      >
                        &times;
                      </span>
                    </div>
                    <div className={css.tankDetailModal__content__body}>
                      <div className={css.tankDetailModal__content__body__img}>
                        <img src={currTank.images.big_icon} alt="tankImg" />
                      </div>
                      <div
                        className={css.tankDetailModal__content__body__content}
                      >
                        <p>Уровень танка: {currTank.tier}</p>
                        <p>{currTank.description}</p>
                      </div>
                    </div>
                    <div className={css.tankDetailModal__content__footer}>
                      Сделано Дубовиком А.А. Тестовое задание для Lesta Games.
                      2023г.
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={css.tankDetailModal__content__body}>
                    Что-то пошло не так...
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default TankDetailModal;
