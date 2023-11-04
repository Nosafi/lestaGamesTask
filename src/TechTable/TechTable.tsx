import useTankData from "./hooks/useTankData";

import Table from "./components/Table/Table";
import TableHeader from "./components/TableHeader/TableHeader";
import TableFooter from "./components/TableFooter/TableFooter";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

import css from "./TechTable.module.scss";
import TankDetailModal from "./components/TankDetailModal/TankDetailModal";

/**
 * Main component, wich contains all other needed component.
 */
function TechTable() {
  const { isLoading, data, getDataFromApi, getSoloTank, isSearching } =
    useTankData();
  const [tankDetailId, setTankDetailId] = useState("");

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className={css.tableContainer} data-testid="table-container">
      <TableHeader getFn={getSoloTank} isSearching={isSearching} />
      {isLoading ? (
        <Loader />
      ) : (
        <Table data={data?.data} setTankDetailId={setTankDetailId} />
      )}
      {!isSearching && (
        <TableFooter
          isPageError={data?.error}
          getFn={getDataFromApi}
          maxPages={data?.meta?.page_total}
        />
      )}
      {tankDetailId !== "" && (
        <TankDetailModal
          tankDetailId={tankDetailId}
          setTankDetailId={setTankDetailId}
        />
      )}
    </div>
  );
}

export default TechTable;
