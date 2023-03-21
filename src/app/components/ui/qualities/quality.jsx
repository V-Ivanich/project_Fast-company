import React from "react";
import PropTypes from "prop-types";

const Quality = ({ _id, color, name }) => {
    const styleClass = `badge px-3 py-2 m-1 bg-${color}`;

    return (
        <span className={styleClass} key={_id} style={{ color: "#FFFF" }}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    _id: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string
};
export default Quality;
