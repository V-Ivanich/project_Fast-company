import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../page/userPage";
import UsersListPage from "../page/usersListPage";
import EditUserPage from "../page/editUserPage/editUserPage";

const Users = () => {
    const { userId, edit } = useParams();

    return (
        <>
            {userId ? (
                edit ? (
                    <EditUserPage />
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
