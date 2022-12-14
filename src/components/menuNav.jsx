import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersNav from "./users";

const MenuNav = () => {
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
            <Link className="nav-link active" aria-current="page" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersNav} />
      </Switch>
    </>
  );
};

export default MenuNav;
