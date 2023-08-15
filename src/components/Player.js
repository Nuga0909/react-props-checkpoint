import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonPlayers from "../players";

const playersObj = JSON.parse(jsonPlayers);
// name, team, nationality, jerseyNumber, age, and an Image URL for the player.

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Team: {team}</ListGroup.Item>
                <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
                <ListGroup.Item>Jersey Number: {jerseyNumber}</ListGroup.Item>
                <ListGroup.Item>Age: {age}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Fifa ranking</Card.Link>
                <Card.Link href="#">Player skills</Card.Link>
            </Card.Body>
        </Card>
    );
};

export { playersObj, Player };