import React from "react";

const Hamburger = ({onToggle, toggle}) => {
    return (
        <div
            className={`hamburger ${toggle ? "active" : ""}`}
            onClick={onToggle}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default Hamburger;
