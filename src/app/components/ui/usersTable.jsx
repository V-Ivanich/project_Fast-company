import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookMark";
import QualitiesList from "./qualities/qualitiesList";
import Table from "../common/table";
import { Link } from "react-router-dom";
import Profession from "./profession";

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },

        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },

        profession: {
            component: (user) => <Profession id={user.profession} />,
            name: "Профессия"
        },

        completedMeetings: {
            path: "completedMeetings",
            name: "Встреч,кол-во"
        },

        rate: {
            path: "rate",
            name: "Оценка"
        },

        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    onClick={() => onToggleBookMark(user._id)}
                    status={user.bookmark}
                />
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default UserTable;
