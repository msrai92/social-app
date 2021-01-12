import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.scss';
function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <nav className="navbar">  
            <div className="nav-logo">
                <p className="logo">Logo</p>
            </div>
            <div className="nav-btn">
                <div onClick={handleClick} className={click ? 'menu-btn-open' : 'menu-btn'}>
                    <div className="menu-btn-burger"></div>
                </div>
                
            </div>
            <ul className={click ? 'nav-sub-menu active' : 'nav-sub-menu'}>
                    <li className="nav-sub-item">
                        <NavLink activeClassName="selected-link" exact to="/register" className="nav-sub-link">register</NavLink>
                    </li>
                    <li className="nav-sub-item">
                        <NavLink activeClassName="selected-link" exact to="/login" className="nav-sub-link">login</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar