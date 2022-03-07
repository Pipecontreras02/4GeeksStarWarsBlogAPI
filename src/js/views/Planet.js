import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Table } from "react-bootstrap";

export function PlanetPage() {

	const {planetId} = useParams();
    const [info, setInfo] = useState([]);
    
	console.log(planetId);
	
	 useEffect(() => { 
    	fetch(`https://www.swapi.tech/api/planets/${planetId}`)
				.then(res => res.json())
				.then((body) => { 
					setInfo(body.result.properties);
				})
				.catch(error => console.log("error", error))
		}, []);
	let img = "https://starwars-visualguide.com/assets/img/planets/"+ planetId +".jpg";
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
									<td>Diameter:</td>
									<td>{info.diameter} kms</td>
									<td></td>
									</tr>
									<tr> 
									<td>Rotation Period:</td>
									<td>{info.rotation_period} Hours</td>
									</tr>
									<tr>
									<td>Orbital Period:</td>
									<td>{info.orbital_period} Years</td>
									</tr>
									<tr>
									<td> Gravity Power:</td>
									<td>{info.gravity}</td>
									</tr>
									<tr>
									<td>Population:</td>
									<td>{info.population}</td>
									</tr>
									<tr>
									<td>Climate:</td>
									<td>{info.climate}</td>
									</tr>
									<tr>
									<td>Terrain:</td>
									<td>{info.terrain}</td>
									</tr>
                                    <tr>
									<td>Surface Water:</td>
									<td>{info.surface_water}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
				</Row>
  			</Container>
		);}