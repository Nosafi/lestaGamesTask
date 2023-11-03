import css from "./LimitSelector.module.scss";

interface LimitSelectorProps {
  tanksOnPage: string;
  setTanksOnPage: React.Dispatch<React.SetStateAction<string>>;
  getData: () => void;
}

function LimitSelector({
  tanksOnPage,
  setTanksOnPage,
  getData,
}: LimitSelectorProps) {
  const limitChanger = (text: string) => {
    if (/^\d+$/.test(text) || text === "") {
      setTanksOnPage(text);
    }
  };

  return (
    <div className={css.limitSelectorContainer}>
      <span className={css.limitSelectorText}>На странице: </span>
      <input
        className={css.limitSelectorInput}
        type="text"
        value={tanksOnPage}
        placeholder="1-100"
        onChange={(e) => limitChanger(e.target.value)}
      />
      <button className={css.limitSelectorButton} onClick={() => getData()}>
        Ok
      </button>
    </div>
  );
}

export default LimitSelector;
