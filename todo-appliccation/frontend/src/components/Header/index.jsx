import React from "react";
import "../../assets/css/Header.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} alt="logo" className="header__logoImage" />
                <span className="header__logoFirstPart">To</span>
                <span className="header__logoSecondPart">Do</span>
            </div>
            <button className="header__addButton">Add Task</button>
        </div>
    );
};

export default Header;
