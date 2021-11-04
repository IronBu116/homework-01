import React, { Component } from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
