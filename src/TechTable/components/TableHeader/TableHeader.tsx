import css from "./TableHeader.module.scss";

import SearchBlock from "./SearchBlock/SearchBlock";

interface TableHeaderProps {
  getFn: (tankName: string) => void;
  isSearching: boolean;
}

function TableHeader({ getFn, isSearching }: TableHeaderProps) {
  return (
    <div className={css.headerContainer}>
      <div className={css.headerTitle}>
        <span className={css.titleAppName}>Мир Танков</span>
        <span className={css.titlePageName}>Танкопедия</span>
      </div>
      <SearchBlock getFn={getFn} isSearching={isSearching} />
    </div>
  );
}

export default TableHeader;
