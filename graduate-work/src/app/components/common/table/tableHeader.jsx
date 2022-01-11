import React from "react";
import { arrowDownIcon, arrowUpIcon } from "../../../constants/svg";

const TableHeader = ({ columns, selectedSort, onSort }) => {
  const handleSort = (item) => {
    console.log(columns);
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  const rendeSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === "asc") {
        return arrowDownIcon;
      } else {
        return arrowUpIcon;
      }
    }
    return null;
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
          >
            {columns[column].name}
            {rendeSortArrow(selectedSort, columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
