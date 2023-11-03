import css from "./TankDetailModal.module.scss";

interface TankDetailModalProps {
  tankDetailId: string;
  setTankDetailId: React.Dispatch<React.SetStateAction<string>>;
}

function TankDetailModal({
  tankDetailId,
  setTankDetailId,
}: TankDetailModalProps) {
  const modalCloser = () => {
    setTankDetailId("");
  };

  return (
    <div
      className={css.tankDetailModal}
      onClick={(e) => {
        modalCloser();
      }}
    >
      <div
        className={css.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={css.tankModalHeader}>
          <span>Имя танка</span>
          <span className={css.tankModalClodeBtn} onClick={() => modalCloser()}>
            &times;
          </span>
        </div>
        <div className={css.tankModalBody}>
          <div className={css.tankModalBodyImgBlock}>
            <img
              src={require("../../assets/img/placeHolder.png")}
              alt="tankImg"
            />
          </div>
          <div className={css.tankModalBodyContent}>
            <p>{tankDetailId}</p>
            Какая-то инфа.
          </div>
        </div>
        <div className={css.tankModalFooter}>
          Сделано Дубовиком А.А. Тестовое задание для Lesta Games. 2023г.
        </div>
      </div>
    </div>
  );
}

export default TankDetailModal;
