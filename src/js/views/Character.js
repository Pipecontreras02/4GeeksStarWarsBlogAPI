import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Table } from "react-bootstrap";

export function CharacterPage() {
	
	const {characterId} = useParams();
    const [info, setInfo] = useState([]);
    
	console.log(characterId);
	
	 useEffect(() => { 
    	fetch(`https://www.swapi.tech/api/people/${characterId}`)
				.then(res => res.json())
				.then((body) => { 
					setInfo(body.result.properties);
				})
				.catch(error => console.log("error", error))
		}, []);
	let img = "https://starwars-visualguide.com/assets/img/characters/"+ characterId +".jpg";
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
									<td>Year of Birth:</td>
									<td>{info.birth_year}</td>
									<td></td>
									</tr>
									<tr>
									<td>Gender:</td>
									<td>{info.gender}</td>
									</tr>
									<tr>
									<td>Height:</td>
									<td>{info.height}</td>
									</tr>
									<tr>
									<td> Skin Color:</td>
									<td>{info.skin_color}</td>
									</tr>
									<tr>
									<td>Hair Color:</td>
									<td>{info.hair_color}</td>
									</tr>
									<tr>
									<td>Eye Color:</td>
									<td>{info.eye_color}</td>
									</tr>
									<tr>
									<td>Weight:</td>
									<td>{info.mass}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
				</Row>
  			</Container>
		);

}