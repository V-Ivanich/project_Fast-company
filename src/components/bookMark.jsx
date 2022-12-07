import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...props }) => {
  return (
    <button className="btn rounded-pill btn-light" {...props}>
      <i className={`bi bi-hand-thumbs-${status ? "up-fill" : "down"}`}></i>
    </button>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
};
export default BookMark;
