import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
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

export default Login
