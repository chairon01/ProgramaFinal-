import React from "react";
import "../../styles/Modal.scss";

export const Modal = () => (
	<React.Fragment>
		<form className="needs-validation" noValidate>
			<div className="container">
				<div className="col-md-6">
					<div className="form-row">
						<div className="col-md">
							<label htmlFor="validationCustom01">First name</label>
							<input type="text" className="form-control" id="validationCustom01" value="Mark" required />
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md">
							<label htmlFor="validationCustom02">Last name</label>
							<input type="text" className="form-control" id="validationCustom02" value="Otto" required />
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md">
							<label htmlFor="validationCustomUsername">Username</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupPrepend">
										@
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									id="validationCustomUsername"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<div className="invalid-feedback">Please choose a username.</div>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="col-md">
							<label htmlFor="validationCustom03">City</label>
							<input type="text" className="form-control" id="validationCustom03" required />
							<div className="invalid-feedback">Please provide a valid city.</div>
						</div>
						<div className="col-md">
							<label htmlFor="validationCustom04">State</label>
							<select className="custom-select" id="validationCustom04" required>
								<option selected disabled value="">
									Choose...
								</option>
								<option>...</option>
							</select>
							<div className="invalid-feedback">Please select a valid state.</div>
						</div>
						<div className="col-md">
							<label htmlFor="validationCustom05">Zip</label>
							<input type="text" className="form-control" id="validationCustom05" required />
							<div className="invalid-feedback">Please provide a valid zip.</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
							<label className="form-check-label" htmlFor="invalidCheck">
								Agree to terms and conditions
							</label>
							<div className="invalid-feedback">You must agree before submitting.</div>
						</div>
					</div>
					<button className="btn btn-primary" type="submit">
						Submit form
					</button>
				</div>
			</div>
		</form>
	</React.Fragment>
);
