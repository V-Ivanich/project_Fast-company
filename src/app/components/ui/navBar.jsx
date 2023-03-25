import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar">
            <div
                className="container-fluid pl-3 mt-2"
                style={{
                    height: "60px",
                    background: "#dcdcdc",
                    borderRadius: "6px",
                    borderBottom: "2px solid #87ceeb"
                }}
            >
                <div className="container d-flex justify-content-between">
                    <ul
                        className="nav"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Main
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/users"
                                >
                                    Users
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div>
                        {isLoggedIn ? (
                            <NavProfile />
                        ) : (
                            <Link
                                className="nav-link"
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                                aria-current="page"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
