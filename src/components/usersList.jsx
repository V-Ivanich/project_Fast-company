import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import Search from "./search";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api/index";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const pageSize = 8;
    let userCrop = 0;
    let sortedUsers = {};
    const [users, setUsers] = useState();

    const [search, setSearch] = useState({ regExp: "", userSearch: [] });

    const filteredSearch = () => {
        console.log(search.userSearch);
        setSearch((prevState) => ({
            ...prevState,
            userSearch: users.filter((user) => {
                const str = user.name.toLowerCase();
                const sample = new RegExp(search.regExp, "g");
                return str.match(sample);
            })
        }));
        console.log(search.regExp);
    };
    const handleSearchChange = ({ target }) => {
        setSearch((prevState) => ({ ...prevState, regExp: target.value }));
    };

    useEffect(() => {
        if (search.regExp) {
            filteredSearch();
        }
    }, [search.regExp]);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleDelete = (usersId) => {
        const usersItems = users.filter((user) => user._id !== usersId);
        setUsers(usersItems);
    };

    const handleToggleBookMark = (idItem) => {
        setUsers(
            users.map((usersItems) => {
                if (usersItems._id === idItem) {
                    usersItems.bookmark = !usersItems.bookmark;
                }
                return usersItems;
            })
        );
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    useEffect(() => {
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage((page) => page - 1);
        }
    }, [sortedUsers]);

    if (!users) return "loadind....";
    console.log("in-", search.regExp);
    const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : search.regExp
        ? search.userSearch
        : users;

    const count = filteredUsers.length;
    sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex justify-content-center">
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
                <Search value={search.regExp} onChange={handleSearchChange} />
                {count > 0 && (
                    <UserTable
                        users={userCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        onDelete={handleDelete}
                        onToggleBookMark={handleToggleBookMark}
                    />
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

UsersList.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default UsersList;
