import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav className = "navbar">
			<ul>
				<li className = "nav-tem"><Link className = "nav-link" to = "/home">Home</Link></li>
				<li className = "nav-tem"><Link className = "nav-link" to = "/planets">Planets</Link></li>
				<li className = "nav-tem"><Link className = "nav-link" to = "/rovers">Rovers</Link></li>
				<li className = "nav-tem"><Link className = "nav-link" to = "/asteroids">Asteroids</Link></li>
				<li className = "nav-tem"><Link className = "nav-link" to = "/about">About</Link></li>
			</ul>
		</nav>
	);
}
export default NavBar;
				
