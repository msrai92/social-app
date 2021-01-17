import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';


const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData);

    const onSubmit = async e => {
        e.preventDefault();
        console.log(formData);
        props.login(email, password);
    }

    // Redirect if logged in 

    if(props.isAuthenticated){
        return <Redirect to="/dashboard"/>
    }

    return (
        <div>
            <h1>Sign In</h1>
            <p>Sign Into Your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login"/>
                <p>Don't have an account? <Link to="/register">Sign Up</Link></p> 
            </form>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
