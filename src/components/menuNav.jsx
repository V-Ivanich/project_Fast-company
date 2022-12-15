import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersNav from "./users";
import CardUser from "./cardUser";

const MenuNav = () => {
  console.log(UsersNav.name);
  return (
    <>
      <div
        className="container pl-3 mt-2"
        style={{
          background: "#dcdcdc",
          borderRadius: "6px",
          borderBottom: "2px solid #87ceeb"
        }}
      >
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route
          path="/users/:idUser"
          render={(params) => <CardUser {...params} />}
        />
        <Route path="/users" component={UsersNav} />
      </Switch>
    </>
  );
};

export default MenuNav;
