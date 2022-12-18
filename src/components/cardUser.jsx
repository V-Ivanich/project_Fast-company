import React from "react";
import photo from "../image/ava.png";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const CardUser = ({ id, data }) => {
    const history = useHistory();
    const user = data.find((item) => item._id === id);
    return !user ? (
        <h2>Loading ...</h2>
    ) : (
        <div className="container">
            <div
                className="card"
                style={{
                    width: "18rem",
                    background: "#dcdcdc",
                    marginTop: "10px"
                }}
            >
                <img
                    src={photo}
                    className="card-img-top"
                    alt="ups..."
                    style={{
                        width: "100px",
                        height: "100px",
                        display: "block",
                        margin: "10px 0px 0px 15%"
                    }}
                />
                <div className="card-body">
                    <h4 className="card-title">{user.name}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {`Профессия: ${user.profession.name}`}
                    </li>
                    <li className="list-group-item">
                        {<QualitiesList qualities={user.qualities} />}
                    </li>
                    <li className="list-group-item">{`Встреч : ${user.completedMeetings}`}</li>
                    <li className="list-group-item">{`Рейтинг : ${user.rate}`}</li>
                </ul>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => history.push("/users")}
                    >
                        Вернуться обратно
                    </button>
                </div>
            </div>
        </div>
    );
};
CardUser.propTypes = {
    id: PropTypes.string,
    data: PropTypes.array
};

export default CardUser;
