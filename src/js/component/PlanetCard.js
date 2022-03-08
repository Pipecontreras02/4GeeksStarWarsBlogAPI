import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



const PlanetCard = () => {
    const {store, actions} = useContext(Context);
    console.log(store.planet)
    return (
        <Container fluid>
            <Row>
                {store.planet.map((planet, id) =>{
                let idd = id+1;
                 let pImg= "https://starwars-visualguide.com/assets/img/planets/"+ idd +".jpg"
                    return(
                    <Card key = {id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pImg} />
                    <Card.Body>
                        <Card.Title>{planet.name}</Card.Title>
                        <Card.Text>
                        A planet
                        </Card.Text>
                        <Link to={`/Planet/${planet.uid}`}>
                        <Button variant="primary">
                            See More
                            </Button>
                        </Link>
                        
                        <Button variant="danger">
                            <FontAwesomeIcon 
                            icon={faHeart} 
                            onClick={()=> {actions.addItem(planet.name)}}/>
                            </Button>
                    </Card.Body>
                </Card>)})
                }
            </Row>
        </Container>
                 )}
                

export default PlanetCard;