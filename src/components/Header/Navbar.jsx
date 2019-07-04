import React, {useState} from "react";

import {NavLink} from "react-router-dom";

const Navbar = ({onToggleOff, toggle}) => {
    const [nav] = useState([
        {name: "Home", to: "/"},
        {name: "Portfolio", to: "/portfolio"},
        {name: "About", to: "/about"}
    ]);

    const renderNavs = nav.map((n, i) => (
        <li key={i}>
            <NavLink className="navLink" to={n.to} onClick={onToggleOff}>
                {n.name}
            </NavLink>
        </li>
    ));

    return (
        <nav className={`nav ${toggle ? "nav--active" : ""}`}>
            <ul className="nav__wrapper">
                {renderNavs}
                <li>
                    <a
                        className="navLink"
                        onClick={onToggleOff}
                        href="mailto:simon.grahn@gmail.com"
                    >
                        Let's chat!
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
