import React from 'react'
import '../../styles/landingComponent.css'
import VendorSignin from '../vendorComponents/VendorSignin'

const VendorSinginPage = () => {
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
                        <VendorSignin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorSinginPage