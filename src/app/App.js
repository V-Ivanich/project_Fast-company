import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

const App = () => {
    return (
        <>
            <AppLoader>
                <AuthProvider>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <ProtectedRoute
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/logout" component={LogOut} />
                        <Redirect to="/" />
                    </Switch>
                </AuthProvider>
            </AppLoader>
            <ToastContainer />
        </>
    );
};

export default App;
