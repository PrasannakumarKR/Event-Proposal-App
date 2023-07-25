import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../../styles/proposalpage.css';
import search from '../../images/search.png';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';
import useAuthCheck from '../../files/authCheck';
import axios from 'axios';
import url from '../../backendUrl';

const ProposalsPage = () => {
    const data = useAuthCheck();
    const [events, setEvents] = useState(null)
    useEffect(() => {
        if (data) {
            console.log(data)
            axios.get(`${url}/vendor/getproposals/${data.email}`).then((res) => {
                console.log(res.data);
                setEvents(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [data]);



    return (
        <div className='vpp-sp-main'>
            <Header data={data} />
            <div className='vpp-main'>
                <div className='vpp-search-cont'>
                    <div className='vpp-left'>
                        <div className='vpp-1'>Proposals</div>
                        <div className='vpp-2'>
                            <img className='vpp-search' src={search} alt='search' />
                        </div>
                        <div className='vpp-3'>
                            <input placeholder='Search Projects' className='vpp-ip' />
                        </div>
                    </div>
                    <div className='vpp-right'>
                        <div className='vpp-4'><img className='vpp-filter-img' style={{ display: 'none' }} src='https://icones.pro/wp-content/uploads/2021/05/icone-de-filtre-grise.png' alt='filter' /></div>
                        <div className='vpp-5'>
                            <Link to='/vendor/createevent' style={{ textDecoration: 'none' }}>
                                <button className='vvp-search-btn'>CREATE</button></Link>
                        </div>
                    </div>
                </div>{
                    !events ? <div>No Events</div> : <div className='vpp-card-div'>
                        {
                            events.map((eventt, index) => {
                                return (<EventCard key={index} data={eventt} email={data.email} />)
                            })
                        }
                    </div>
                }


            </div>

        </div>
    )
}

export default ProposalsPage