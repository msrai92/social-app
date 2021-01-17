import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../styles/navbar.scss';
import auth from '../../reducers/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout}) => {
    const [click, setClick] = useState(false);
    const authLinks = (
        <ul className={click ? 'nav-sub-menu active' : 'nav-sub-menu'}>
            <li className="nav-sub-item">
                <NavLink activeClassName="selected-link" exact to="/dashboard" className="nav-sub-link">dashboard</NavLink>
            </li>
            <li className="nav-sub-item">
                <NavLink onClick={logout} activeClassName="selected-link" exact to="/logout" className="nav-sub-link">logout</NavLink>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className={click ? 'nav-sub-menu active' : 'nav-sub-menu'}>
            <li className="nav-sub-item">
                <NavLink activeClassName="selected-link" exact to="/register" className="nav-sub-link">register</NavLink>
            </li>
            <li className="nav-sub-item">
                <NavLink activeClassName="selected-link" exact to="/login" className="nav-sub-link">login</NavLink>
            </li>
        </ul>
    );

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
            { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);