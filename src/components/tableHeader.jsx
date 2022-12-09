import React from "react";
import PropTypes from "prop-types";
import HeaderIcon from "./headerIcons";

const TableHeader = ({ onSort, selectedSort, columns, checkIcon }) => {
  const handleSort = (item, keyIcon) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
        });
      } else {
      onSort({ path: item, order: "asc", icons: false });
    }
    checkIcon(
      Object.keys(columns).map((column) => {
        if (columns[column].path === keyIcon.path) {
          columns[column].icons = !columns[column].icons;
        }
        return columns[column].icons ? columns[column].icons : "";
      })
    );
  };

  return (
    <thead className="table-secondary">
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path, columns[column])
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            <HeaderIcon statusIcon={columns[column].icons} handleSort={handleSort}/>
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  checkIcon: PropTypes.object
};

export default TableHeader;
