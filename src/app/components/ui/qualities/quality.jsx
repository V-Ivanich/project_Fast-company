import React from "react";
import PropTypes from "prop-types";

const Quality = ({ color, name }) => {
    const styleClass = `badge px-3 py-2 m-1 bg-${color}`;

    return (
        <span className={styleClass} style={{ color: "#FFFF" }}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};
export default Quality;
