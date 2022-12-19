import React from "react";
import Users from "./components/layouts/users";
import NavBar from "./components/navBar";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import NotFound from "./components/not_found";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default App;
