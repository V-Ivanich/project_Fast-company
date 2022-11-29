import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api";
import SearchStatus from "./searchStatus";

const titleItems = [
    "Имя",
    "Качества",
    "Профессия",
    "Встреч,кол-во",
    "Оценка",
    "Избранное",
    ""
];

const Users = ({ users: allUsers, ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-secondary">
                            <tr key={allUsers._id}>
                                {titleItems.map((item, index) => (
                                    <th
                                        key={index}
                                        className="ms-4"
                                        scope="col"
                                    >
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User key={user._id} {...props} {...user} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
