import React, { useState } from 'react';
import '../../styles/createevent.css';
import '../../styles/openimages.css';
import useAuthCheck from '../../files/authCheck';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import url from '../../backendUrl';

const CreateEvent = () => {
    const [message, setMessage] = useState('')
    const data = useAuthCheck();
    const [show, setShow] = useState(false);
    const [flag, setFlag] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const { username, email } = data ? data : '';
    const [eventName, setEventName] = useState('');
    const [placeOfEvent, setPlaceOfEvent] = useState('');
    const [proposalType, setProposalType] = useState('');
    const [eventType, setEventType] = useState('');
    const [budget, setBudget] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');
    const [foodPreferences, setFoodPreferences] = useState('');
    const [events, setEvents] = useState('');
    // images
    const [images, setImages] = useState([]);

    const convertFile1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[0] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    };

    const convertFile2 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[1] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile3 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[2] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile4 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[3] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile5 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[4] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile6 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[5] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile7 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[6] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile8 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[7] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile9 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[8] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }
    const convertFile10 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileString = reader.result;
            setImages((prevImages) => {
                const updatedImages = [...prevImages];
                updatedImages[9] = fileString;
                return updatedImages;
            });
        };
        reader.readAsDataURL(file);
    }

    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handlePlaceOfEventChange = (event) => {
        setPlaceOfEvent(event.target.value);
    };

    const handleProposalTypeChange = (event) => {
        setProposalType(event.target.value);
    };

    const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
    };

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFoodPreferencesChange = (event) => {
        setFoodPreferences(event.target.value);
    };

    const handleEventsChange = (event) => {
        setEvents(event.target.value);
    };
    const toggleAdd = () => {
        console.log(images)
        if (eventName === "" || placeOfEvent === '' || proposalType === '' || eventType === '' || budget === '' || from === '' || to === '' || description === '' || foodPreferences === '' || events === '') {
            setMessage('Enter all fileds to create event')
            setShow(true)
        } else {
            axios.post(`${url}/vendor/createevent`,
                {
                    vendorEmail: email,
                    events: [{
                        eventName: eventName,
                        placeOfEvent: placeOfEvent,
                        proposalType: proposalType,
                        budget: budget,
                        from: from,
                        to: to,
                        description: description,
                        images: [...images],
                        FoodPreferences: foodPreferences,
                        Events: events,
                        contact: email,
                        vendorName: username
                    }]
                }).then((res) => {
                    setMessage(res.data)
                    setShow(true)
                })
        }
    }

    return (
        !flag ?
            <div className='ce-bg'>
                <div className='create-event-card'>
                    <div className='cec-header'>CREATE PROPOSAL</div>
                    <div className='cec-body'>
                        <div className='cec-left'>
                            <div className='cec-l-1'>
                                <div className='cec-ev-name'>Event Name</div>
                                <div>
                                    <input
                                        type='text'
                                        onChange={handleEventNameChange}
                                        placeholder='Name'
                                        className='cec-ip-ev-name'
                                        value={eventName}
                                    />
                                </div>
                            </div>
                            <div className='cec-l-2'>
                                <div className='cec-l2-t'>
                                    <div className='cec-l2-t-l'>
                                        <div className='cec-l2-t-l-name'>Place of Event</div>
                                        <div className='cec-l2-t-l-ip'>
                                            <select
                                                className='cec-select'
                                                onChange={handlePlaceOfEventChange}
                                                value={placeOfEvent}
                                            >
                                                <option>Select</option>
                                                <option>Tirupati</option>
                                                <option>Bangalore</option>
                                                <option>Hyderabad</option>
                                                <option>Chennai</option>
                                                <option>Mumbai</option>
                                                <option>Bangalore</option>
                                                <option>Delhi</option>
                                                <option>Bhopal</option>
                                                <option>Kerala</option>
                                                <option>Vijayawada</option>
                                                <option>Ayodhya</option>
                                                <option>Noida</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='cec-l2-t-r'>
                                        <div className='cec-l2-t-l-name'>Proposal Type</div>
                                        <div className='cec-l2-t-l-ip'>
                                            <select
                                                className='cec-select'
                                                onChange={handleProposalTypeChange}
                                                value={proposalType}
                                            >
                                                <option>Select</option>
                                                <option>Birthday</option>
                                                <option>Marriage</option>
                                                <option>Reception</option>
                                                <option>Reception</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='cec-l2-t'>
                                    <div className='cec-l2-t-l'>
                                        <div className='cec-l2-t-l-name'>Event Type</div>
                                        <div className='cec-l2-t-l-ip'>
                                            <select
                                                className='cec-select'
                                                onChange={handleEventTypeChange}
                                                value={eventType}
                                            >
                                                <option>Select</option>
                                                <option>Birthday</option>
                                                <option>Marriage</option>
                                                <option>Reception</option>
                                                <option>Reception</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='cec-l2-t-r'>
                                        <div className='cec-l2-t-l-name'>Budget</div>
                                        <div className='cec-l2-t-l-ip'>
                                            <input
                                                className='cec-select'
                                                type='number'
                                                onChange={handleBudgetChange}
                                                value={budget}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='cec-l2-t'>
                                    <div className='cec-l2-t-l'>
                                        <div className='cec-l2-t-l-name'>From</div>
                                        <div className='cec-l2-t-l-ip'>
                                            <input
                                                className='cec-select'
                                                type='date'
                                                onChange={handleFromChange}
                                                value={from}
                                            />
                                        </div>
                                    </div>
                                    <div className='cec-l2-t-r'>
                                        <div className='cec-l2-t-l-name'>To
                                        </div>
                                        <div className='cec-l2-t-l-ip'>
                                            <input
                                                className='cec-select'
                                                type='date'
                                                onChange={handleToChange}
                                                value={to}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cec-l-3'>
                                <div className='cec-l3-t'>Description</div>
                                <div className='cec-l3-b'>
                                    <textarea
                                        className='cec-dec'
                                        placeholder='Description'
                                        name='content'
                                        onChange={handleDescriptionChange}
                                        value={description}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='cec-right'>
                            <div className='cec-r-1'>
                                <div className='cec-img-btns'>
                                    <button onClick={() => setImages([])} className='cec-img-btn'>DELETE ALL</button>
                                    <button onClick={() => setFlag(true)} className='cec-img-btn' >ADD IMAGES</button>
                                </div>
                                <div className='cec-img-grid'>
                                    <div className='cec-grid-row'>
                                        <div className='cec-img'>{
                                            images[0] ? <img style={{ width: '100%', height: '100%' }} src={images[0]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[1] ? <img style={{ width: '100%', height: '100%' }} src={images[1]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[2] ? <img style={{ width: '100%', height: '100%' }} src={images[2]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[3] ? <img style={{ width: '100%', height: '100%' }} src={images[3]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[4] ? <img style={{ width: '100%', height: '100%' }} src={images[4]} alt='img1' /> : null}</div>
                                    </div>
                                    <div className='cec-grid-row'>
                                        <div className='cec-img'>{
                                            images[5] ? <img style={{ width: '100%', height: '100%' }} src={images[5]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[6] ? <img style={{ width: '100%', height: '100%' }} src={images[6]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[7] ? <img style={{ width: '100%', height: '100%' }} src={images[7]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[8] ? <img style={{ width: '100%', height: '100%' }} src={images[8]} alt='img1' /> : null}</div>
                                        <div className='cec-img'>{
                                            images[9] ? <img style={{ width: '100%', height: '100%' }} src={images[9]} alt='img1' /> : null}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='cec-r-2'>
                                <div className='cec-l3-t'>Food Preferences</div>
                                <div className='cec-l3-b'>
                                    <textarea
                                        className='cec-dec'
                                        placeholder='Preferences'
                                        name='content'
                                        onChange={handleFoodPreferencesChange}
                                        value={foodPreferences}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='cec-r-3'>
                                <div className='cec-l3-t'>Events</div>
                                <div className='cec-l3-b'>
                                    <textarea
                                        className='cec-dec'
                                        placeholder='Events'
                                        name='content'
                                        onChange={handleEventsChange}
                                        value={events}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cec-footer'>
                        <button className='cec-create' onClick={toggleAdd}>ADD</button>
                    </div>
                </div>
                {show ? (
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>ALERT !!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{message}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                ) : null}

            </div> : <div className='oi-main'>
                <div className="oi-img-cont">
                    <h2 className="oi-title">Add Images</h2>
                    <div className="oi-file-inputs">
                        <div className="file-input" ><input onChange={convertFile1} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile2} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile3} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile4} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile5} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile6} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile7} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile8} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile9} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>
                        <div className="file-input" ><input onChange={convertFile10} className='oi-file' type="file" size="sm" /><button className='submit-button'>DELETE</button></div>

                    </div>
                    <div className="submit-button-div">
                        <button onClick={() => setFlag(false)} className="submit-button1">SUBMIT</button>
                    </div>
                </div>
            </div>
    );
};

export default CreateEvent;