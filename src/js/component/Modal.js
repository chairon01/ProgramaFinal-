import React, { useState, useEffect } from "react";
import "../../styles/Modal.scss";
import { useHistory } from "react-router-dom";

export const Modal = () => {
	let history = useHistory;
	const [formulario, setFormulario] = useState({
		name: "",
		email: "",
		telefono: "",
		direccion: "",
		evento: "",
		fecha: "",
		hora: "",
		suscribir: false,
		personas: 20
	});
	const [success, setSuccess] = useState(false);
	const handleChange = e => {
		setFormulario({
			...formulario,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async e => {
		e.preventDefault();
		console.log(formulario);
		let response = await fetch("https://3000-c95b9d80-7a4a-47e1-8d49-e5bb779943e1.ws-us02.gitpod.io/presupuesto", {
			method: "POST",
			headers: {
				"Content-Type": "application/JSON"
			},
			body: JSON.stringify(formulario)
		});
		let jsonResponse = await response.json();
		console.log(jsonResponse);
		if (response.ok) {
			console.log("usuario registrado");
			setSuccess(true);
		} else {
			console.log("falla en el registro del usuario");
		}
	};
	return (
		<React.Fragment>
			<form className="needs-validation" noValidate onSubmit={handleSubmit}>
				{success ? (
					<div className="d-flex justify-content-center">
						<h2 className="my-4">
							{"Felicitaciones, haz sido registrado con éxito, te contactaremos pronto!"}
						</h2>
						<button onClick={e => history.push("/home")} type="button" className="btn btn-primary">
							{"Volver al home"}
						</button>
					</div>
				) : (
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<h2> PLANIFICACIÓN DE EVENTOS</h2>
								<div className="form">
									<div className="">
										<label htmlFor="validationCustom01">Name</label>
										<input
											name="name"
											type="text"
											className="form-control"
											id="validationCustom01"
											value={formulario.name}
											onChange={e => handleChange(e)}
											placeholder="Escribe su nombre"
											required
										/>
										<div className="valid-feedback">Looks good!</div>
									</div>
									<div className="">
										<label htmlFor="validationCustom02">Teléfono</label>
										<input
											type="text"
											name="telefono"
											className="form-control"
											id="validationCustom02"
											placeholder="+58-212-963-4773"
											value={formulario.telefono}
											onChange={e => handleChange(e)}
											required
										/>
										<div className="valid-feedback">Looks good!</div>
									</div>
									<div className="">
										<label htmlFor="validationCustomUsername">Email</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text" id="inputGroupPrepend">
													@
												</span>
											</div>
											<input
												name="email"
												type="text"
												className="form-control"
												id="validationCustomUsername"
												placeholder="hola@email.com"
												value={formulario.email}
												onChange={e => handleChange(e)}
												aria-describedby="inputGroupPrepend"
												required
											/>
											<div className="invalid-feedback">Please choose a username.</div>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="col-md-6">
										<label htmlFor="validationCustom03">fecha</label>
										<input
											type="date"
											name="fecha"
											className="form-control"
											id="validationCustom03"
											required
											value={formulario.fecha}
											onChange={e => handleChange(e)}
										/>
										<div className="invalid-feedback">Please provide a valid city.</div>
									</div>
									<div className="col-md-6">
										<label htmlFor="validationCustom03">Hora del Evento</label>
										<input
											type="time"
											className="form-control"
											value={formulario.hora}
											onChange={e =>
												setFormulario({
													...formulario,
													hora: e.target.value
												})
											}
										/>
									</div>
									<div className="col-md-6">
										<label htmlFor="validationCustom04">Evento</label>
										<select
											name="evento"
											className="custom-select"
											id="validationCustom04"
											value={formulario.evento}
											onChange={e => handleChange(e)}
											required>
											<option value="elegir">Elegir</option>
											<option value="boda">Boda</option>
											<option value="quince años">15 Años</option>
											<option value="infantil">Fiesta Infantil</option>
											<option value="nocturna">Night Party</option>
											<option value="cattering">Cattering</option>
										</select>
										<div className="invalid-feedback">Please select a valid event.</div>
									</div>
									<div className="col-md-6">
										<label htmlFor="validationCustom05">Dirección</label>
										<input
											name="direccion"
											type="text"
											className="form-control"
											value={formulario.direccion}
											onChange={e => handleChange(e)}
											id="validationCustom05"
											required
										/>
										<div className="invalid-feedback">Please provide a direction.</div>
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
										<label className="switch">
											<input
												type="checkbox"
												value={formulario.suscribir}
												onChange={e =>
													setFormulario({
														...formulario,
														suscribir: !formulario.suscribir
													})
												}
											/>
											<span className="slider round" />
										</label>
										Agree to terms and conditions
										<div className="invalid-feedback">You must agree before submitting.</div>
										<button className="button" type="submit">
											Submit form
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</form>
		</React.Fragment>
	);
};
