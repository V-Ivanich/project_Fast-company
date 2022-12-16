import React from "react";
import Users from "./components/users";
import MenuNav from "./components/menuNav";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import NotFound from "./components/not_found";
import CardUser from "./components/cardUser";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <MenuNav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route
          path="/users/:idUser"
          render={(params) => <CardUser {...params} />}
        />
        <Route path="/users/" component={Users} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>

      {/* <Users /> */}
    </>
  );
};

export default App;
