import React from "react"
import { NavLink } from "react-router-dom"

const Header = () =>
{
    const activeColor = {color:'orange'};
    const inactiveColor = {color: 'blue'};
    return (
        <nav>
            <NavLink end to="/" style={({ isActive }) => isActive ? activeColor : inactiveColor}>Home</NavLink>{ " | "}
            <NavLink to="/about" style={({ isActive }) => isActive ? activeColor  : inactiveColor}>About</NavLink> 
        </nav>
    )
}

export default Header