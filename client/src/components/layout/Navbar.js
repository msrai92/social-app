import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/main.scss";
function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <div className="navbar">
            <div onClick={handleClick}>
            <div className={click ? 'menu-btn-open' : 'menu-btn'}>
                <div className="menu-btn-burger"></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar