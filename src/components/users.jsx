import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import API from "../api";

const titleItems = [
    "Имя",
    "Качества",
    "Профессия",
    "Встреч,кол-во",
    "Оценка",
    "Избранное",
    ""
];

const Users = ({ users, ...props }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        API.professions.fetchAll.then((data) => setProfessions(data));
        console.log("currentPage");
    }, []);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };
    console.log(professions);

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {professions && (
                <GroupList
                    selectedItem={selectedProf}
                    items ={professions}
                    onItemSelect ={handleProfessionSelect}
                />
            )}
            {users.length > 0 && (
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-secondary">
                        <tr key={users._id}>
                            {titleItems.map((item, index) => (
                                <th key={index} className="ms-4" scope="col">
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
