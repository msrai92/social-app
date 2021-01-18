import React from 'react';
import "../../styles/main.scss";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Landing({isAuthenticated}){
    if(isAuthenticated){
        return <Redirect to="/dashboard"/>
    }
    return(
        <div>
            Landing
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);