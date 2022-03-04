import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



const CharacterCard = () => {
    const {store} = useContext(Context);
    console.log(store.character)
    return (
        <Container fluid>
            <Row>
                {store.character.map((character, id) =>{
                let idd = id+1;
                 let cImg= "https://starwars-visualguide.com/assets/img/characters/"+ idd +".jpg"
                    return(
                    <Card key = {id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cImg} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                        A person within the Star Wars universe
                        </Card.Text>
                        <Link to={`/Character/${character.uid}`}>
                        <Button variant="primary">
                            See More
                            </Button>
                        </Link>
                        
                        <Button variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
                    </Card.Body>
                </Card>)})
                }
            </Row>
        </Container>
                 )}
                

export default CharacterCard;