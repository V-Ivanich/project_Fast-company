import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinksUser = ({ idUser, nameUser }) => {
    return (
        <>
            <Link key={idUser} to={`users/${idUser}`}>
                {nameUser}
            </Link>
        </>
    );
};
LinksUser.propTypes = {
    idUser: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired
};

export default LinksUser;
