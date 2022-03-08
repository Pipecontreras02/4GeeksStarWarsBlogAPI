import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Dropdown } from 'react-bootstrap';
import "../../styles/home.css";
import { Context } from '../store/appContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbars = () => {

	const {store, actions} = useContext(Context);

	return (
		
		<Navbar bg="dark" expand="lg">
 		 <Container>
		  <Link to="/">
   			 <Navbar.Brand >
				<img alt=""
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"height="90" width="100"
        		/>
			</Navbar.Brand>
		  </Link>
		  <Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
			Watchlist<p>{store.watchlist.length}</p>
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{
					store.watchlist.map((watchlist, id) => {
						
						return(
							<>
					<Dropdown.Item key={id}>
						{watchlist}
						<FontAwesomeIcon
						icon={faXmark}
						onClick={() => actions.removeItem(watchlist)}
					/>
					</Dropdown.Item></>
						)
					})
				}
				
				
			</Dropdown.Menu>
			</Dropdown>
  		</Container>
		</Navbar>
	);
};
