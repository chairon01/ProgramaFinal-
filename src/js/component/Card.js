import React from "react";
import bodaImage from "../../Img/Boda.jpg";
import "../../styles/Card.scss";

export const Card = () => (
	<React.Fragment>
		{/*Inicio de los Eventos de la página */}
		<div className="container-fluid">
			<div className="middle">
				<h3>
					<big>Eventos</big>
				</h3>
			</div>
			<div className="parallax">
				<div className="container-1">
					<div className="cell-4" />
					<p className="card-text-1">
						<h1 className="mb-2">Fiestas Tematicas</h1>
						<b>
							<i>
								Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición
								tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año
								1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un
								libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la
								composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la
								década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de
								Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus
								PageMaker que incluye versiones de Lorem Ipsum.
							</i>
						</b>
					</p>
				</div>
			</div>
			<div className="middle">
				<h3>
					<big>CELEBRALO TODO</big>
				</h3>
			</div>

			<div className="parallax-1">
				<div className="container-2">
					<div className="cell-3">
						<p className="card-text-1">
							<h1 className="mb-2">Fiestas Infantiles</h1>
							<b>
								<i>
									Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y
									composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la
									industria desde el año 1500, cuando una impresora desconocida tomó una galera de
									tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco
									siglos, sino también el salto a la composición electrónica, permaneciendo
									esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de
									las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con
									software de publicación de escritorio como Aldus PageMaker que incluye versiones de
									Lorem Ipsum.
								</i>
							</b>
						</p>
					</div>
				</div>
			</div>
			<div className="middle">
				<h3>
					<big> SOMOS TU SOLUCIÓN </big>
				</h3>
			</div>
			<div className="parallax-2">
				<div className="container-2">
					<div className="cell-2">
						<p className="card-text-1">
							<h1 className="mb-2">Boda</h1>
							<b>
								<i>
									Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y
									composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la
									industria desde el año 1500, cuando una impresora desconocida tomó una galera de
									tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco
									siglos, sino también el salto a la composición electrónica, permaneciendo
									esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de
									las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con
									software de publicación de escritorio como Aldus PageMaker que incluye versiones de
									Lorem Ipsum.
								</i>
							</b>
						</p>
					</div>
				</div>
			</div>
		</div>
		{/*Fin de los Eventos de la Página */}
	</React.Fragment>
);
