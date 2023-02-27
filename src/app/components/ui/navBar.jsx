import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
    const { currentUser } = useAuth();
    return (
        <nav className="navbar">
            <div
                className="container-fluid pl-3 mt-2"
                style={{
                    background: "#dcdcdc",
                    borderRadius: "6px",
                    borderBottom: "2px solid #87ceeb"
                }}
            >
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            Main
                        </Link>
                    </li>
                    {currentUser && (
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
                <div className="d-flex align-middle">
                    {currentUser ? (
                        <p>User</p>
                    ) : (
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
