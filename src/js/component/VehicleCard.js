import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



const VehicleCard = () => {
    const {store, actions} = useContext(Context);
    console.log(store.vehicle)
    return (
        <Container fluid>
            <Row>
                {store.vehicle.map((vehicle, id) =>{
                let idd = vehicle.uid;
                 let pImg= "https://starwars-visualguide.com/assets/img/vehicles/"+ idd +".jpg"
                    return(
                    <Card key = {id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pImg} />
                    <Card.Body>
                        <Card.Title>{vehicle.name}</Card.Title>
                        <Card.Text>
                        A vehicle
                        </Card.Text>
                        <Link to={`/Vehicle/${vehicle.uid}`}>
                        <Button variant="primary">
                            See More
                            </Button>
                        </Link>
                        
                        <Button variant="danger"><FontAwesomeIcon icon={faHeart} onClick={()=> {actions.addItem(vehicle.name)}} /></Button>
                    </Card.Body>
                </Card>)})
                }
            </Row>
        </Container>
                 )}
                

export default VehicleCard;