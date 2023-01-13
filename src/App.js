import React from "react";
import Users from "./components/layouts/users";
import NavBar from "./components/ui/navBar";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
