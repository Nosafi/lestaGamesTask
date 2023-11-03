import css from "./PageSelector.module.scss";

interface PageSelectorProps {
  currPage: string;
  setCurrPage: React.Dispatch<React.SetStateAction<string>>;
  maxPages: number | undefined;
}

function PageSelector({ currPage, setCurrPage, maxPages }: PageSelectorProps) {
  const pageChanger = (text: string) => {
    if (/^\d+$/.test(text) || text === "") {
      setCurrPage(text);
    }
  };

  return (
    <div className={css.pageSelectorContainer}>
      <div className={css.pageSelectorContainer__pagesText}>Страница </div>
      <button
        className={css.pageSelectorContainer__button_left}
        onClick={() => {
          setCurrPage((prew: String) => {
            const newState = +prew - 1;
            if (newState >= 1) return newState.toString();
            return prew.toString();
          });
        }}
      >
        {"<"}
      </button>
      <input
        className={css.pageSelectorContainer__input}
        type="text"
        value={currPage}
        placeholder={"1-" + maxPages}
        onChange={(e) => {
          pageChanger(e.target.value);
        }}
      />
      <button
        className={css.pageSelectorContainer__button_right}
        onClick={() => {
          setCurrPage((prew: String) => (+prew + 1).toString());
        }}
      >
        {">"}
      </button>
      <div className={css.pageSelectorContainer__pagesText}>
        {" "}
        из {maxPages}.
      </div>
    </div>
  );
}

export default PageSelector;
