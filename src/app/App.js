import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
            <ToastContainer />
        </>
    );
};

export default App;
