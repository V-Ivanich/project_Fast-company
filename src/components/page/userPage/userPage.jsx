import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import photo from "../../../image/ava.png";
import Qualities from "../../ui/qualities";
import PropTypes from "prop-types";
import api from "../../../api";
// import UserEditing from "../userEditing";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
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
                            {<Qualities qualities={user.qualities} />}
                        </li>
                        <li className="list-group-item">{`Встреч : ${user.completedMeetings}`}</li>
                        <li className="list-group-item">{`Рейтинг : ${user.rate}`}</li>
                    </ul>
                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClick}
                        >
                            <Link to="/edit">Изменить</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
