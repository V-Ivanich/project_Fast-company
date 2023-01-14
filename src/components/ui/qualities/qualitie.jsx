import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
    const styleClass = `badge px-3 py-2 m-1 bg-${color}`;
    return (
        <span className={styleClass} style={{ color: "#FFFF" }}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Qualitie;
