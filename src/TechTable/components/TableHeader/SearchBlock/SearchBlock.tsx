import { useState } from "react";
import css from "./SearchBlock.module.scss";

import SearchIcon from "../../../assets/icons/SearchIcon.svg";

interface SearchBlockProps {
  getFn: (tankName: string) => void;
  isSearching: boolean;
}

function SearchBlock({ getFn, isSearching }: SearchBlockProps) {
  const [currTankName, setCurrTankName] = useState("");

  return (
    <div className={css.searchBlockContainer}>
      <span className={css.searchBlockContainer__text}>Найди свой танк:</span>
      <div className={css.searchBlockContainer__inputContainer}>
        <input
          className={css.searchBlockContainer__inputContainer__input}
          type="text"
          value={currTankName}
          onChange={(e) => {
            if (e.target.value.length <= 15) setCurrTankName(e.target.value);
          }}
        ></input>
        {currTankName !== "" && (
          <button
            className={css.searchBlockContainer__inputContainer__resetButton}
            onClick={() => {
              setCurrTankName("");
              if (isSearching) getFn("");
            }}
          >
            &#9747;
          </button>
        )}
      </div>
      <button
        className={css.searchBlockContainer__searchButton}
        onClick={() => {
          getFn(currTankName);
        }}
      >
        <img src={SearchIcon} alt="Search"></img>
      </button>
    </div>
  );
}

export default SearchBlock;
