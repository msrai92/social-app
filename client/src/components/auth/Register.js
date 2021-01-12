import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const { name, email, password, cpassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData);

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== cpassword){
            console.log('passwords do not match')
        }else{
            console.log(formData);
            /*const newUser = {
                name,
                email,
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);
                console.log(body)
                const res = await axios.post('http://localhost:5000/api/users', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }*/
        }
    }
    return (
        <div>
            <h1>Sign up</h1>
            <p>Create Your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required/>
                </div>
                <div>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required/>
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" name="cpassword" value={cpassword} onChange={e => onChange(e)} minLength="6" required/>
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
                <p>Already have an account? <Link to="/login">Sign In</Link></p> 
            </form>
        </div>
    )
}

export default Register
