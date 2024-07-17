import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Example from "../components/menu/pesquisar";


const Home = () => {
    return (
        <div>
            <Example />       
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShZC-aRMjhBjWR8HqOAZPXCyMDC7ueGE2pg&s" />
            <Card.Body>
            <Card.Title>Card da home</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Home;
