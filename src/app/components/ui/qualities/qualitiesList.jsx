import React from "react";
import PropType from "prop-types";
import Qualitie from "./qualitie";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualElem) => (
                <Qualitie key={qualElem._id} {...qualElem} />
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropType.array.isRequired
};

export default QualitiesList;
