import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../page/userPage";
import UsersListPage from "../page/usersListPage";
import UserEditing from "../page/userEditing";

const Users = () => {
    const { userId, edit } = useParams();

    return (
        <>
            {userId ? (
                edit ? (
                    <UserEditing />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
