import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function EventCard(props) {
    const data = props.data;

    ///console.log('fil',data);
    const navigate = useNavigate()
    const toggleOpenEv = () => {
        navigate(`/user/openevent/${data?._id}/${data?.contact}`)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <div style={{ width: '100%', height: '50%' }}>
                <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={data?.images[0]} />
            </div>
            <Card.Body >
                <Card.Title>{data?.vendorName}</Card.Title>
                <Card.Text>
                    <b>{data?.eventName}</b>
                </Card.Text>
                <Card.Text>
                    Budget : {data?.budget}
                </Card.Text>
                <Button onClick={toggleOpenEv} variant="primary" >Open Event</Button>
            </Card.Body>
        </Card>
    );
}

export default EventCard;