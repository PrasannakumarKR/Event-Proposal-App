import React from 'react'
import '../../styles/landingComponent.css'
import UserSignin from '../userComponents/UserSignin'

const UserSigninPage = () => {
    return (
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
                        <UserSignin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSigninPage