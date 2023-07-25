import React, { useState } from 'react';
import '../../styles/landingComponent.css';
import symbol from '../../images/symbol.png';
import { Link, useNavigate } from 'react-router-dom';
import url from '../../backendUrl';

import axios from 'axios';

const UserSignin = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const toggleText = (e) => {
        setText(e.target.value);
    };

    const togglePassword = (e) => {
        setPassword(e.target.value);
    };



    const handleSignin = () => {
        console.log(text, password);
        if (text.length === 0 || password.length === 0) {
            setMessage('Enter proper credentials');
        } else {
            axios
                .post(`${url}/user/signin`, { text, password }) // Use the appropriate backend route for user sign-in
                .then((res) => {
                    const data = res.data;
                    if (data.success) {
                        localStorage.setItem('token', data.token);
                        setMessage(data.message);
                        navigate('/user/landingpage'); // Update the desired navigation path for user sign-in
                    } else {
                        setMessage(data.message);
                    }
                });
        }
    };

    return (
        <div>
            <div className='form'>
                <div className='form-top'>
                    <div className='form-top-left1'>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            Vendor
                        </Link>
                    </div>
                    <div className='form-top-right'>User</div>
                </div>
                <div className='form-mid'>
                    <div className='lc-form-tt'>Sign in to your Account</div>
                    <div className='lc-form-un'>
                        <input placeholder='Phone / Email' className='lc-ip' onChange={toggleText} />
                    </div>
                    <div className='lc-form-pw'>
                        <input placeholder='Password' className='lc-ip' type='password' onChange={togglePassword} />
                    </div>
                    <div className='lc-form-fp'>Forgot Password?</div>
                    {message ? (
                        <div className='lc-form-msg'>
                            <div className='lc-img-div'>
                                <img src={symbol} alt='xy' className='lc-img' />
                            </div>
                            <div className='lc-msg'>{message}</div>
                        </div>
                    ) : null}
                </div>
                <div className='form-bot'>
                    <div className='lc-form-bot-l'>
                        <Link style={{ textDecoration: 'none' }} to='/user/signup'>
                            Create Account
                        </Link>
                    </div>
                    <div className='lc-form-bot-r'>
                        <button className='lc-signin' onClick={handleSignin}>
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignin;