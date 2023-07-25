import React from 'react'
import '../../styles/header.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const { data } = props;
    const navigate = useNavigate();
    const username = data ? data.username : "";
    const toggleLogout = () => {
        localStorage.removeItem('token')
        navigate(`/user/signin`);
    }
    return (
        <div className='header-cont'>
            <div className='hc-left'>LOGO</div>
            <div className='hc-right'>
                <div className='vendor-name-hc'>{username}</div>
                <div className='img-div-hc'><img className='img-hc' src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=' alt='txt' /></div>
                <Button onClick={toggleLogout} variant="primary">Logout</Button>
            </div>
        </div>
    );
}


export default Header