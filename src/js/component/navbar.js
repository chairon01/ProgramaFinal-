import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-light bg-success">
				<a className="navbar-brand" href="https://Wikipedia.com">
					<i className="fas fa-globe-americas" />
					<i>Avila Eventos</i>
				</a>
				<div className="nav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								<b>Inicio</b> <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#card-total">
								<b>Servicios</b>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<b>Contacto</b>
							</a>
						</li>
						<a className="btn btn-outline-dark" href="https://xxx.com" role="button">
							<b>Suscribirse</b>
						</a>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};
