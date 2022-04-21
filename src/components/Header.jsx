import React from "react";
import Logo from "../static/logo.jpg"

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={Logo}/>
            <p className="logo__dscr">
                Samurai
            </p>
        </header>
    )
};

export default Header