import React from "react";
import "../../assets/css/Header.css";
import Logo from "../../assets/images/logo.png";

const Header = ({ page, setPage }) => {
    return (
        <div className="header">
            <div className="header__logo" onClick={() => setPage("home")}>
                <img src={Logo} alt="logo" className="header__logoImage" />
                <span className="header__logoFirstPart">To</span>
                <span className="header__logoSecondPart">Do</span>
            </div>
            {page === "home" && (
                <button
                    className="header__addButton"
                    onClick={() => setPage("add")}
                >
                    Add Task
                </button>
            )}
        </div>
    );
};

export default Header;
