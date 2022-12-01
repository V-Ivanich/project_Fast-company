import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api/index";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        if (Array.isArray(api.users)) {
            setUsers(api.users.fetchAll());
        } else {
            api.users.fetchAll().then((data) => {
                setUsers(Object.assign(data));
            });
        }
    }, []);

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

    return (
        <div className="d-flex mt-2 justify-content-center">
            {users && (
                <Users
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            )}
        </div>
    );
};

export default App;
