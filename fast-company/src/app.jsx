import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import Users from "./components/users";
import Login from "./components/login";
import User from "./components/user";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" exact component={Login} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:userId" component={User} />
            </Switch>
        </>
    );
};

export default App;
