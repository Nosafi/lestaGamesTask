import { useEffect, useState } from "react";
import css from "./TableFooter.module.scss";
import PageSelector from "./PageSelector/PageSelector";
import LimitSelector from "./LimitSelector/LimitSelector";

import TankDataError from "../../types/TankDataError";

interface TableFooterProps {
  isPageError: TankDataError | undefined;
  getFn: (tanksLimit?: string, pageNum?: string) => void;
  maxPages: number | undefined;
}

/**
 * Footer container with simple logic of limits and pages.
 */
function TableFooter({ isPageError, getFn, maxPages }: TableFooterProps) {
  const [tanksOnPage, setTanksOnPage] = useState("25");
  const [currPage, setCurrPage] = useState("1");

  const getData = () => {
    let page = currPage;
    if (tanksOnPage === "") setTanksOnPage("100");
    if (currPage === "") setCurrPage("1");
    if (maxPages)
      if (+page > maxPages) {
        setCurrPage(maxPages.toString());
        page = maxPages.toString();
      }
    getFn(tanksOnPage, page);
  };

  useEffect(() => {
    if (isPageError)
      if (isPageError.message === "PAGE_NO_NOT_FOUND") {
        setCurrPage("1");
        getFn(tanksOnPage, "1");
      }
  }, [tanksOnPage, isPageError]);

  useEffect(() => {
    if (+tanksOnPage > 100) setTanksOnPage("100");
  }, [tanksOnPage]);

  useEffect(() => {
    getData();
  }, [currPage]);

  return (
    <div className={css.footerContainer} data-testid="footer-container">
      <PageSelector
        currPage={currPage}
        setCurrPage={setCurrPage}
        maxPages={maxPages}
      />
      <LimitSelector
        tanksOnPage={tanksOnPage}
        setTanksOnPage={setTanksOnPage}
        getData={getData}
      />
    </div>
  );
}

export default TableFooter;
