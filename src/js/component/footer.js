import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<React.Fragment>
		{/*Inicio del Footer */}
		<footer className="footer">
			<div className="container-">
				<div className="row">
					<p>
						<strong>
							<i className="far fa-copyright" />
							Todos los derechos reservados
						</strong>
					</p>

					<div>
						<a href="https://www.instagram.com/avila_eventos/?hl=es-la" className="fa fa-instagram" />
						<a href="https://www.facebook.com" className="fa fa-facebook" />
						<a href="https://www.twitter.com" className="fa fa-twitter" />
					</div>
				</div>
			</div>
		</footer>
		{/* Fin del footer*/}
	</React.Fragment>
);
