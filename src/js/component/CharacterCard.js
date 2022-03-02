import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import { Link } from "react-router-dom";
import { Button, Card, Container, Row } from 'react-bootstrap';



const CharacterCard = () => {
    const {store} = useContext(Context);
    console.log(store.character)
    return (
        <Container fluid="md">
            <Row>
                {store.character.map((character, id) =>{
                    
                    // fetch(character.url)
                    //.then(res => res.json())
                    //.then(body => //properties = body.description;
                    //    console.log(body.description))
                    //.catch(error => console.log("error", error));

                    return(
                    <Card key = {id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/400x250" />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
             the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>)})
                }
            </Row>
        </Container>
                 )}
                

export default CharacterCard;