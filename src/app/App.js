import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";
import AuthProvider from "./hooks/useAuth";

const App = () => {
    return (
        <>
            <AuthProvider>
                <NavBar />
                <ProfessionProvider>
                    <QualitiesProvider>
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route
                                path="/users/:userId?/:edit?"
                                component={Users}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <Redirect to="/" />
                        </Switch>
                    </QualitiesProvider>
                </ProfessionProvider>
            </AuthProvider>
            <ToastContainer />
        </>
    );
};

export default App;
