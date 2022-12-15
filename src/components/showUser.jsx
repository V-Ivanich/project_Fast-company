import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShowUser = ({ idUser, nameUser }) => {
  console.log(idUser);
  return (
    <>
      <Link key={idUser} to={`user/${idUser}`}>
        {nameUser}
      </Link>
    </>
  );
};
ShowUser.propTypes = {
  idUser: PropTypes.string.isRequired,
  nameUser: PropTypes.string.isRequired
};

export default ShowUser;
