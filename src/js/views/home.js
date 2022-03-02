import React from "react";
import "../../styles/home.css";
import { Container } from 'react-bootstrap';
import CharacterCard from "../component/CharacterCard";


export const Home = () => (
	<div className="text-center mt-5">
		<>
		<Container fluid>
			<h1>Characters</h1>
			<CharacterCard />
		</Container>
		</>
	</div>
);
