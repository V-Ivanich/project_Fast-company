import React from "react";
import PropType from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities();
    if (!isLoading) {
        return (
            <>
                {qualities.map((qual) => (
                    <Quality key={qual} id={qual} />
                ))}
            </>
        );
    } else return "Loading...";
};

QualitiesList.propTypes = {
    qualities: PropType.array
};

export default QualitiesList;
