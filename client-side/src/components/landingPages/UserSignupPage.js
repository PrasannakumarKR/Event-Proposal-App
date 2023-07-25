import React from 'react'
import UserSignup from '../userComponents/UserSignup'
const UserSignupPage = () => {
    return (
        <div>
            <div className='lc-main'>
                <div className='lc-png'>
                    <div className='lc-logo-text'>
                        LOGO
                    </div>
                    <div className='lc-body'>
                        <div className='lc-body-left'>
                            <div className='lc-text-display'>
                                TEXT WILL BE DISPLAYED HERE
                            </div>
                        </div>
                        <div className='lc-body-right'>
                            <UserSignup />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignupPage