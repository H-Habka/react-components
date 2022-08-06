import React from "react";
import './style.css'

const NiceLetter = ({ children, colorOnHover }) => {
    console.log(children);
    return (
        <pre
            className={`clip p-2 cursor-pointer relative hover:-top-2 hover:-left-1 hover:rotate-3 duration-200 ease-in-out hover:${colorOnHover}`}
        >
            {children}
        </pre>

    );
};

export default NiceLetter;
