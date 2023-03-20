import React, { useEffect } from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import { useDispatch } from "react-redux";
import { loadQualitiesList } from "./store/qualities";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadQualitiesList());
    }, []);
    return (
        <>
            <AuthProvider>
                <NavBar />
                <ProfessionProvider>
                    <QualitiesProvider>
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
                    </QualitiesProvider>
                </ProfessionProvider>
            </AuthProvider>
            <ToastContainer />
        </>
    );
};

export default App;
