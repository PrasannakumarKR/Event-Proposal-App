import React, { useState } from 'react'
import '../../styles/eventcard.css'
import edit from '../../images/edit.png'
import bin from '../../images/bin.png'
import axios from 'axios'
import url from '../../backendUrl'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EventCard = (props) => {
    const data = props.data;
    const id = data._id;
    const [show, setShow] = useState(false);
    const email = props.email;
    const handleClose = () => {
        setShow(false);
    };

    const [message, setMessage] = useState(null)
    const toggleDelete = () => {
        const shouldDelete = window.confirm('Are you sure you want to delete this event?');
        if (shouldDelete) {
            axios.delete(`${url}/vendor/deleteevent/${id}/${email}`).then((res) => {
                if (res.data.success) {
                    setMessage(res.data.message);
                    window.location.reload();
                }
            });
        } else {

        }
    };

    const toggleEdit = () => {

    }
    return (
        <div className='ec-main-cont'>
            <div className='ec-cont-top'>
                <div className='ec-en'>{data.eventName}</div>
                <div className='ec-dis'>{data.description}</div>
            </div>
            <div className='ec-cont-bot'>
                <div className='ec-bot-1'>
                    <div className='ec-bot-top'>Place</div>
                    <div className='ec-bot-bot'>{data.placeOfEvent}</div>
                </div>
                <div className='ec-bot-2'>
                    <div className='ec-bot-top'>Proposal Type</div>
                    <div className='ec-bot-bot'>{data.proposalType}</div>
                </div>
                <div className='ec-bot-3'>
                    <div className='ec-bot-top'>From Date</div>
                    <div className='ec-bot-bot'>{data.from}</div>
                </div>
                <div className='ec-bot-4'>
                    <div className='ec-bot-top'>To Date</div>
                    <div className='ec-bot-bot'>{data.to}</div>
                </div>
                <div className='ec-bot-5'>
                    <div className='ec-bot-top'>Budget</div>
                    <div className='ec-bot-bot'>{data.budget}</div>
                </div>
                <div className='ec-bot-6'>
                    <div className='ec-edit-del'>
                        <div><img src={edit} onClick={toggleEdit} style={{ display: 'none' }} className='ec-edit' alt='edit' /></div>
                        <div><img src={bin} onClick={toggleDelete} className='ec-bin' alt='bin' /></div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error !!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EventCard