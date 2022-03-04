import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Dropdown } from 'react-bootstrap';
export const Navbars = () => {
	return (
		
		<Navbar bg="light" expand="lg">
 		 <Container>
		  <Link to="/">
   			 <Navbar.Brand href="#home">
				<img alt=""
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"height="90" width="100"
        		/>
			</Navbar.Brand>
		  </Link>
		  <Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				Watchlist
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
  		</Container>
		</Navbar>
	);
};
