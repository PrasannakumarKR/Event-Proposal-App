import React from 'react'

const EventCard1 = (props) => {
    const data = props.data
    return (
        <div className='ec1-main'>
            <div className='ec1-t'>
                <img src={props.data?.images[0]} alt='maain' className='ec1-t1' />
            </div>
            <div className='ec1-b'>
                <div className='ec1-b-1'>
                    <div className='ec1-b-1-l'>Vendor</div>
                    <div className='ec1-b-1-r'>{data?.vendorName}</div>
                </div>
                <div className='ec1-b-1'>
                    <div className='ec1-b-1-l'>Email</div>
                    <div className='ec1-b-1-r'>{data?.contact}</div>
                </div>
                <div className='ec1-b-4'>
                    <div className='ec1-b-1-l'>Proposal</div>
                    <div className='ec1-b-1-r'>{data?.eventName}</div>
                </div>
                <div className='ec1-b-11'>
                    <div className='ec1-b-1-l2'>From: &nbsp; {data?.from}</div>
                    <div className='ec1-b-1-r3'>To &nbsp; {data?.to}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard1