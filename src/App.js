import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(Object.assign(data));
        });
    }, []);

    console.log(users);
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
        <>
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </>
    );
}

export default App;
