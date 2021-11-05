import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!localStorage.getItem("user"));
    }, []);

    const onLogin = () => {
        localStorage.setItem("user", "student");
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default withAuth;
