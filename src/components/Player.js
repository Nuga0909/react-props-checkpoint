import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonPlayers from "../players";

const playersObj = JSON.parse(jsonPlayers);
// name, team, nationality, jerseyNumber, age, and an Image URL for the player.

const Player = ({ name= "Mohamed Salah",
    team= "Liverpool",
    nationality= "Egypt",
    jerseyNumber= "11",
    age= "31",
    imageUrl= "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc4bnfG3zNmNB6Dk4C3vge8FxKkdFH64E96jiW8FKdS_04gDdF" }) => {
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