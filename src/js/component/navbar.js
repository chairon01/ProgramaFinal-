import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../component/Modal";

export const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="nav justify-content-end navbar navbar-expand-lg navbar-light ">
				<a href="/" className="inicio">
					<strong>Avila Eventos</strong>
				</a>
				<div className="collapse navbar-collapse">
					<div className="nav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<strong />
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="btn btn-outline-success nav-link" href="/presupuesto">
									<strong>Planificaciòn de Eventos</strong>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contacto1">
									<strong>Servicios</strong>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};
