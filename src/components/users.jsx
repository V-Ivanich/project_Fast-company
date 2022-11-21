import React, { useState } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";

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
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
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

export default Users;
