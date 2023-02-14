import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
    const { getQuality } = useQualities();
    const { color, name } = getQuality(id);
    const styleClass = `badge px-3 py-2 m-1 bg-${color}`;

    return (
        <span className={styleClass} style={{ color: "#FFFF" }}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    id: PropTypes.string
};
export default Quality;
