import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, data, children, onSort, selectedSort }) => {
  return (
    <div className="content__section-card d-flex justify-content-center m-3">
      <table className="align-middle m-0">
        {children || (
          <>
            <TableHeader {...{ columns, onSort, selectedSort }} />
            <TableBody {...{ columns, data }} />
          </>
        )}
      </table>
    </div>
  );
};

export default Table;
