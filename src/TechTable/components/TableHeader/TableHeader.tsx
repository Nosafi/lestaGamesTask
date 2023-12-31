import css from "./TableHeader.module.scss";

import SearchBlock from "./SearchBlock/SearchBlock";

interface TableHeaderProps {
  getFn: (tankName: string) => void;
  isSearching: boolean;
}

/**
 * Header container with page title and SearchBlock.
 */
function TableHeader({ getFn, isSearching }: TableHeaderProps) {
  return (
    <div className={css.headerContainer}>
      <div
        className={css.headerContainer__title}
        data-testid="header-container-title"
      >
        <span className={css.headerContainer__title__name}>Мир Танков</span>
        <span className={css.headerContainer__title__pageName}>Танкопедия</span>
      </div>
      <SearchBlock getFn={getFn} isSearching={isSearching} />
    </div>
  );
}

export default TableHeader;
