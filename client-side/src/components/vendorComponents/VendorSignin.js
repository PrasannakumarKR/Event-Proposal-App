import React, { useState } from 'react'
import '../../styles/landingComponent.css'
import symbol from '../../images/symbol.png'
import { Link } from 'react-router-dom'
import url from '../../backendUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VendorSignin = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const toggleText = (e) => {
        setText(e.target.value)
    }
    const togglePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignin = () => {
        console.log(text, password)
        if (text.length === 0 || password.length === 0) {
            setMessage('Enter proper credentials')
        } else {
            axios.post(`${url}/vendor/signin`, {
                text, password
            }).then((res) => {
                const data = res.data;
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    setMessage(data.message);
                    navigate('/vendor/proposalspage')
                } else {
                    setMessage(data.message);
                }
            })
        }
    }
    return (
        <div>
            <div className='form'>
                <div className='form-top'>
                    <div className='form-top-left'>Vendor</div>
                    <div className='form-top-right1'><Link style={{ textDecoration: 'none' }} to='/user/signin'>User</Link></div>
                </div>
                <div className='form-mid'>
                    <div className='lc-form-tt'>
                        Sign in your Account
                    </div>
                    <div className='lc-form-un'>
                        <input placeholder='Phone / Email' onChange={toggleText} className='lc-ip' />
                    </div>
                    <div className='lc-form-pw'>
                        <input onChange={togglePassword} type='password' placeholder='Password' className='lc-ip' />
                    </div>
                    <div className='lc-form-fp'>
                        Forget Password?
                    </div>
                    {
                        message ? <div className='lc-form-msg'>
                            <div className='lc-img-div'><img src={symbol} alt='xy' className='lc-img' /></div>
                            <div className='lc-msg'>{message}</div>
                        </div> : null
                    }

                </div>
                <div className='form-bot'>
                    <div className='lc-form-bot-l'>
                        <Link to='/vendor/signup' style={{ textDecoration: 'none' }}>
                            Create Account</Link>
                    </div>
                    <div className='lc-form-bot-r'>
                        <button onClick={handleSignin} className='lc-signin'>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorSignin