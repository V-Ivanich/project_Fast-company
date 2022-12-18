import React from "react";
import { Link } from "react-router-dom";

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
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/users"
                        >
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MenuNav;
