import React, { useEffect, useState } from 'react'
import '../../styles/openevent.css'
import Header from '../vendorComponents/Header'
import EventCard1 from '../Bootstrap/EventCard1'
import useAuthCheck2 from '../../files/authCheck2'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import url from '../../backendUrl'
import { useNavigate } from 'react-router-dom'


const OpenEvent = () => {
    const data = useAuthCheck2();
    const {id, vendorEmail} = useParams();
    const navigate = useNavigate()
    const [eventData ,setEventData ] = useState(null);
    useEffect(()=>{
        axios.get(`${url}/user/getVendorData/${id}/${vendorEmail}`).then((res)=>{
            setEventData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[id,vendorEmail]);

    const toggleSelect=()=>{
        console.log(eventData)
        axios.post(`${url}/user/selectEvent`, {
            data:[eventData],
            userEmail: data.email
        }).then((res)=>{
            alert(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const togglegoback=()=>{
        navigate('/user/landingpage')
    }
    return (
        <div className='oe-main'>
            <Header data={data}/>
            <div className='oe-body'>
                <div className='oe-row'>
                    <div className='oe-p1'>
                        <EventCard1 data={eventData}/>
                    </div>
                    <div className='oe-p2'>
                        <b>Description</b>
                        <div className='oe-des'>{eventData?.description}</div>
                    </div>
                    <div className='oe-p2'>
                        <b>Food Preferences</b>
                        <div className='oe-des'> {eventData?.FoodPreferences}</div>
                    </div>
                </div>
                <div className='oe-row'>
                    <div className='oe-p1'>
                        <div className='oe-imgs-grid'>
                            <div className='oe-r'>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[1]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[2]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[3]} alt='cc'/>
                                </div>
                            </div>
                            <div className='oe-r'>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[4]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[5]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[6]} alt='cc'/>
                                </div>
                            </div>
                            <div className='oe-r'>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[7]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[8]} alt='cc'/>
                                </div>
                                <div className='oe-grid'>
                                    <img style={{height:'100%', width:'100%'}} src={eventData?.images[9]} alt='cc'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='oe-p2'>
                        <b>Contact & Other Details</b>
                        <div className='oe-des'>{eventData?.vendorName}: &nbsp;{eventData?.contact}</div>
                    </div>
                    <div className='oe-p2'>
                        <b>Events Inside</b>
                        <div className='oe-des'>{eventData?.Events}</div>
                    </div>
                </div>
            </div>
            <div className='oe-sel-div'>
                <button onClick={toggleSelect} className='oe-sel-ev'>SELECT EVENT</button>
                <button onClick={togglegoback} className='oe-sel-ev'>GO BACK</button>
            </div>
        </div>
    )
}

export default OpenEvent