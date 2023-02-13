import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ name, color }) => {
    const styleClass = `badge px-3 py-2 m-1 bg-${color}`;

    return (
        <span className={styleClass} style={{ color: "#FFFF" }}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string
};
export default Qualitie;
