import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
  return (
    <span
      className="badge px-3 py-2 m-1"
      style={{ background: color, color: "#2F4F4F" }}
    >
      {name}
    </span>
  );
};

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default Qualitie;
