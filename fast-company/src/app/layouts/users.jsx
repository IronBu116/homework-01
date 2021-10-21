/* eslint-disable multiline-ternary */
import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UserEditPage from "../components/ui/userEditPage";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

    return (
        <>
            {userId ? (
                edit ? (
                    <UserEditPage userId={userId} />
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
