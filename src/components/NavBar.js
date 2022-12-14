import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/Closet">Current Closet</NavLink>
            <NavLink to="/Form">Add Item</NavLink>
        </nav>
    );
}

export default NavBar;
