import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Table } from "react-bootstrap";

export function VehiclePage() {

	const {vehicleId} = useParams();
    const [info, setInfo] = useState([]);
    
	console.log(vehicleId);
	
	 useEffect(() => { 
    	fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`)
				.then(res => res.json())
				.then((body) => { 
					setInfo(body.result.properties);
				})
				.catch(error => console.log("error", error))
		}, []);
	let img = "https://starwars-visualguide.com/assets/img/vehicles/"+ vehicleId +".jpg";
	console.log(info)
	return (
			<Container>
				<Row>
					<Col><Image src={img}/></Col>
					<Col>
							<Table>
								<thead>
									<tr>
									<th><h2>{info.name}</h2></th>
									</tr>
								</thead>
								<tbody>
                                    <tr>
									<td>Model:</td>
									<td>{info.model}</td>
									</tr>
									<tr>
									<td>Vehicle Class:</td>
									<td>{info.vehicle_class}</td>
								
									</tr>
									<tr> 
									<td>Manufacturer:</td>
									<td>{info.manufacturer}</td>
									</tr>
									<tr>
									<td>Orbital Period:</td>
									<td>{info.orbital_period}</td>
									</tr>
									<tr>
									<td> Cost In Credits:</td>
									<td>$ {info.cost_in_credits}</td>
									</tr>
									<tr>
									<td>Length:</td>
									<td>{info.length}</td>
									</tr>
									<tr>
									<td>Crew:</td>
									<td>{info.crew}</td>
									</tr>
									<tr>
									<td>Passengers:</td>
									<td>{info.passengers}</td>
									</tr>
                                    <tr>
									<td>Max Atmosphering Speed:</td>
									<td>{info.max_atmosphering_speed} kms/h</td>
									</tr>
                                    	<tr>
									<td>Cargo Capacity:</td>
									<td>{info.cargo_capacity}</td>
									</tr>
                                    	<tr>
									<td>Consumables:</td>
									<td>{info.consumables}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
				</Row>
  			</Container>
		);}