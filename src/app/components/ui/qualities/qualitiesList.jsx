import React from "react";
import PropType from "prop-types";
import Qualitie from "./qualitie";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ id }) => {
    console.log("qualitie->", id);
    const { isLoading, getQuality } = useQualities();

    if (!isLoading) {
        return (
            <>
                {id.map((item) => (
                    <Qualitie
                        key={item}
                        name={getQuality(item).name}
                        color={getQuality(item).color}
                    />
                ))}
            </>
        );
    } else return "loading...";
};

QualitiesList.propTypes = {
    id: PropType.array.isRequired
};

export default QualitiesList;
