import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h3>Registration Form</h3>
            <form>
                <input type="text" placeholder='name' /><br />
                <input type="email" name="" id="" placeholder='email address' /><br />
                <input type="password" name="" id="" placeholder='password' /><br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;