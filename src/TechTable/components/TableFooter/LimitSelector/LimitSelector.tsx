import css from "./LimitSelector.module.scss";

interface LimitSelectorProps {
  tanksOnPage: string;
  setTanksOnPage: React.Dispatch<React.SetStateAction<string>>;
  getData: () => void;
}

/**
 * Component for setting count of elements on page.
 */
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
    <div
      className={css.limitSelectorContainer}
      data-testid="limit-selector-container"
    >
      <span className={css.limitSelectorContainer__text}>На странице: </span>
      <input
        className={css.limitSelectorContainer__input}
        data-testid="limit-selector-container-input"
        type="text"
        value={tanksOnPage}
        placeholder="1-100"
        onChange={(e) => limitChanger(e.target.value)}
      />
      <button
        data-testid="limit-selector-container-button"
        className={css.limitSelectorContainer__button}
        onClick={() => getData()}
      >
        Ok
      </button>
    </div>
  );
}

export default LimitSelector;
