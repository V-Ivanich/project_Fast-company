import React, { useState } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
    const inicialState = API.users.fetchAll();
    const [users, setUsers] = useState(inicialState);

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
