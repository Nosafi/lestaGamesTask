import css from "./Table.module.scss";

import TankInnerData from "../../types/TankInnerData";

interface TableProps {
  data: TankInnerData | undefined;
  setTankDetailId: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Component for displaying main table with tanks info.
 */
function Table({ data, setTankDetailId }: TableProps) {
  if (!data || Object.keys(data).length <= 0)
    return (
      <div className={css.container}>
        <div className={css.container__error}>
          Данных нет. Проверьте правильность заполнения всех полей.
        </div>
      </div>
    );

  return (
    <div className={css.container} data-testid="table-container">
      <table className={css.container__table} data-testid="table">
        <thead>
          <tr>
            <th>Нация</th>
            <th>Иконка</th>
            <th>Название</th>
            <th>Тип</th>
            <th>Здоровье</th>
            <th>Описание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((item) => {
            const currTank = data[item];
            const currFlagName = currTank.nation;
            const currTypeName = currTank.type;

            return (
              <tr
                key={"tank-row-" + item}
                data-testid="table-row"
                onClick={() => {
                  setTankDetailId(currTank.tank_id.toString());
                }}
              >
                <td>
                  <img
                    src={require("../../assets/img/flags/" +
                      currFlagName +
                      ".png")}
                    alt={currFlagName}
                  />
                </td>
                <td>
                  <img src={currTank.images.small_icon} alt="tank icon" />
                </td>
                <td>{currTank.name}</td>
                <td>
                  <img
                    className={css.tableTypeImg}
                    src={require("../../assets/img/types/" +
                      currTypeName +
                      ".png")}
                    alt={currTypeName}
                  />
                </td>
                <td>{currTank.default_profile.hp}</td>
                <td className={css.tableDescSell}>
                  {currTank.description.substring(0, 100)}...
                </td>
                <td>{currTank.price_credit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
