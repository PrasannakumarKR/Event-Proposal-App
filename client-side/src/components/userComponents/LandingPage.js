import React, { useEffect, useState } from 'react'
import '../../styles/userlanding.css'
import Header from '../userComponents/Header'
import EventCard from '../Bootstrap/EventCart'
import useAuthCheck2 from '../../files/authCheck2'
import axios from 'axios'
import url from '../../backendUrl'

const LandingPage = () => {
    const data = useAuthCheck2();
    const [events, setEvents] = useState(null);
    const [selections, setSelections] = useState(null);
    useEffect(() => {
        axios.get(`${url}/user/getselections/${data?.email}`).then((res) => {
            setSelections(res.data);
            console.log('done')
        }).catch((err) => {
            console.log(err)
        })
    }, [data]);
    useEffect(() => {
        axios.get(`${url}/user/getallevents`).then((res) => {
            setEvents(res.data);
        }).catch((err) => {
            console.log(err);
        });

    }, [data]);

    return (
        <div className='lp-main'>
            <Header data={data} />
            <div className='lp-long-img'>
                <div className='lp-ov'>
                </div>
            </div>
            <div className='lp-body'>
                <div className='lp-selected'>
                    <h3 className='sel-eve-heading'>SELECTED EVENTS</h3>
                    {
                        selections ? <div className='lp-sel-cards'>
                            {
                                selections.map((ev, index) => {
                                    return (<EventCard key={index} data={ev} />)
                                })
                            }
                        </div> : <center>Loading...</center>
                    }

                    <div className='lp-list'>
                        <h3 className='sel-eve-heading '>Proposals</h3>

                        {
                            events ? <div className='lp-sel-cards'>
                                {
                                    events.map((eve, index) => {
                                        return <EventCard key={index} data={eve} />
                                    })
                                }
                            </div> : null
                        }
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default LandingPage