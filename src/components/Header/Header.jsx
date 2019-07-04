import React, {useState} from "react";

import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const onToggle = () => setToggle(!toggle);
    const onToggleOff = () => setToggle(false);

    return (
        <header className="header">
            <Navbar toggle={toggle} onToggleOff={onToggleOff} />
            <Hamburger onToggle={onToggle} toggle={toggle} />
        </header>
    );
};

export default Header;
