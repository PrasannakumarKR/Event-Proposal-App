import React from 'react'
import VendorSignup from '../vendorComponents/VendorSignup'
const VendorSignupPage = () => {
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
                            <VendorSignup/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorSignupPage