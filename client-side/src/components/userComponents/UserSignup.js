import React, { useState } from 'react';
import '../../styles/landingComponent.css';
import symbol from '../../images/symbol.png';
import { Link } from 'react-router-dom';
import url from '../../backendUrl';
import axios from 'axios';

const UserSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleRegistration = () => {
        console.log('cc');
        if (email.length < 8) {
            setMessage('Email is too short/not valid');
            console.log(message);
        } else {
            if (!email.includes('@')) {
                setMessage('Invalid email format');
            } else {
                if (username.length < 5) {
                    setMessage('User name is too short');
                } else {
                    if (
                        contact.length < 10 ||
                        contact.length > 13 ||
                        contact.length === 11 ||
                        contact.length === 12
                    ) {
                        setMessage('Contact must be 10 or 13 (with country code) digits');
                    } else {
                        if (password.length < 6) {
                            setMessage('Password is too short');
                        } else {
                            if (password !== confirmPassword) {
                                setMessage('Passwords do not match');
                            } else {
                                axios
                                    .post(`${url}/user/signup`, {
                                        username,
                                        email,
                                        contact,
                                        password,
                                    })
                                    .then((res) => {
                                        setMessage(res.data.message);
                                        if (res.data.success) {
                                            console.log('cbuuekej');
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }
                        }
                    }
                }
            }
        }
    };

    return (
        <div>
            <div className='form1'>
                <div className='form-top'>
                    <div className='form-top-left1'>
                        <Link style={{ textDecoration: 'none' }} to='/vendor/signup'>
                            Vendor
                        </Link>
                    </div>
                    <div className='form-top-right'>User</div>
                </div>
                <div className='form-mid1'>
                    <div className='lc-form-tt1'>Sign in your Account</div>
                    <div className='lc-form-un1'>
                        <input
                            placeholder='Name'
                            className='lc-ip'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className='lc-form-un1'>
                        <input
                            placeholder='Email'
                            className='lc-ip'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='lc-form-un1'>
                        <input
                            placeholder='Contact'
                            className='lc-ip'
                            value={contact}
                            onChange={handleContactChange}
                        />
                    </div>
                    <div className='lc-form-pw1'>
                        <input
                            placeholder='Password'
                            className='lc-ip'
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='lc-form-pw1'>
                        <input
                            placeholder='Confirm Password'
                            className='lc-ip'
                            type='password'
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <div className='lc-form-fp1'>Forget Password?</div>
                    {message && message.length > 0 ? (
                        <div className='lc-form-msg1'>
                            <div className='lc-img-div'>
                                <img src={symbol} alt='xy' className='lc-img' />
                            </div>
                            <div className='lc-msg'>{message}</div>
                        </div>
                    ) : null}
                </div>
                <div className='form-bot1'>
                    <div className='lc-form-bot-l'>
                        <Link to='/user/signin' style={{ textDecoration: 'none' }}>
                            Sign In
                        </Link>
                    </div>
                    <div className='lc-form-bot-r'>
                        <button className='lc-signin' onClick={handleRegistration}>
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;