import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getProfessionsByIds,
    getProfessionsLoadingStatus
} from "../../store/professions";

const Profession = ({ id }) => {
    const { name } = useSelector(getProfessionsByIds(id));
    const isLoading = useSelector(getProfessionsLoadingStatus());

    if (!isLoading) {
        return <p>{name}</p>;
    } else return "loading...";
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
