import React, { useEffect, useState } from "react";
import QualitiesCard from "../../ui/qualitiesCard";
import UserCard from "../../ui/userCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";
import PropTypes from "prop-types";
import api from "../../../api";
import Loading from "../../ui/loading";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;

{
    /* <div className="container mt-4">
                    <div className="row">
                        <div
                            className="col-md-3 offset-md-4 shadow p-3"
                            style={{ borderRadius: "10px" }}
                        >
                            <div
                                className="card"
                                style={{
                                    width: "18rem",
                                    background: "#dcdcdc",
                                    marginLeft: "5px"
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
                                        {
                                            <Qualities
                                                qualities={user.qualities}
                                            />
                                        }
                                    </li>
                                    <li className="list-group-item">{`Встреч : ${user.completedMeetings}`}</li>
                                    <li className="list-group-item">{`Рейтинг : ${user.rate}`}</li>
                                </ul>
                                <div className="card-body">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={handleClick}
                                    >
                                        Редактировать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */
}
