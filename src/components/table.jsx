import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ onSort, selectedSort, columns, data, children, checkIcon }) => {
  return (
    <table className="table table-striped table-hover align-middle">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns, checkIcon }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  );
};
Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array,
  checkIcon: PropTypes.object
};

export default Table;
