import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";
import { Footer } from "../component/footer";

export const Home = () => (
	<React.Fragment>
		{/*Inicio del Carousel */}
		<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1400"
						className="d-block "
						alt="..."
					/>
					<div className="text-carousel-1">
						<h1>
							<b> LOS MEJORES EVENTOS </b>
						</h1>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1400"
						className="d-block "
						alt="..."
					/>
					<div className="text-carousel-1">
						<h1>
							<b>SOMOS TU SOLUCIÓN PARA TUS EVENTOS </b>
						</h1>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1400"
						className="d-block "
						alt="..."
					/>
					<div className="text-carousel-1">
						<h1>
							<b>CELEBRALO TODO</b>
						</h1>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Antes</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Próximo</span>
			</a>
		</div>
		{/*Fin del Carousel */}
		{/*Inicio del componente Card*/}
		<Card />
		{/*Fin del componente Card */}
		{/*Inicio del componente Footer */}
		<Footer />
		{/*Fin del componente Footer*/}
	</React.Fragment>
);
