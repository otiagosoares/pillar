import React, {useState, useEffect} from 'react';

import Navbar from '../../components/navbar';
import Grid from '../../components/grid';

import {validateFormMember} from '../../helpers/validateHelper';
import api from '../../services/api';
import { getDataUser } from '../../services/auth';

export default (props) => {

	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState({})
	const [errors, setErrors] = useState({init: ''})

	document.title = "Pillar - Cadastro do 	Novo Membro"

	const handleChange = event => {

		setForm({
			...form,
			[event.target.name]: event.target.value
		})

	}

	const handleSubmit = event =>{

		event.preventDefault()

		let result = setErrors(validateFormMember(form))
		console.log(result)
		setLoading(false)
	}

	async function sendaData(){

		await api.post('members', form).then((response) => {

			console.log(response, 'aqui')

		}).catch((err) => {
			console.error(err)
		})

	}

 	return (

		<>

		<Navbar/>
		{getDataUser()}
		<div className="container">
			<div className="row">
				<Grid cols="12 12 12">
					<br />
					<h3> Novo Membro </h3>
					<hr />
					<form onSubmit={ e => handleSubmit(e)}>
						  <div className="form-row">
						    <div className="form-group col-md-6">
						      <label>Nome</label>
						      <input type="text"   className={ errors.errorNameMember ? "input is-invalid" : "input"} name="nameMember" id="nameMember" placeholder="Nome" onChange={e => handleChange(e)}/>
						      { errors.errorNameMember && <p className="text-danger"><small className="help-inline">{errors.errorNameMember}</small></p>}
						    </div>
						    <div className="form-group col-md-6">
						      <label>Data de Nascimento</label>
						      <input type="date"  className={ errors.errorBirthMember ? "input is-invalid" : "input"} name="emailMember" name="birthMember" id="birth" placeholder="Data de Nascimento"onChange={e => handleChange(e)} />
						      { errors.errorBirthMember && <p className="text-danger"><small className="help-inline">{errors.errorBirthMember}</small></p>}
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-sm-12 col-md-6">
						      <label>Email</label>
						      <input type="email"   className={ errors.errorEmailMember ? "input is-invalid" : "input"} name="emailMember"  id="inputEmail4" placeholder="Email"onChange={e => handleChange(e)}/>
						       { errors.errorEmailMember && <p className="text-danger"><small className="help-inline">{errors.errorEmailMember}</small></p>}
						    </div>

						    <div className="form-group col-sm-12 col-md-3">
						      <label forhtml='phone'>Telefone Fixo</label>
						      <input type="text" name="phoneMember" value={form.phoneMember} className={ errors.errorPhoneMember ? "input is-invalid" : "input"} id="phone" placeholder="(xx) xxxxx-xxxx" onChange={e => handleChange(e)}/>
						      { errors.errorPhoneMember && <p className="text-danger"><small className="help-inline">{errors.errorPhoneMember}</small></p>}
						    </div>

						     <div className="form-group col-sm-12 col-md-3">
						      <label forhtml='phone'>Telefone Celular</label>
						      <input type="text" name="cel" value={form.cel}  className={ errors.errorCel ? "input is-invalid" : "input"} id="cel" placeholder="(xx) xxxx-xxxx" onChange={e => handleChange(e)}/>
						      { errors.errorCel && <p className="text-danger"><small className="help-inline">{errors.errorCel}</small></p>}
						    </div>
						  </div>
						   <div className="form-row">
							  <div className="form-group col-md-10">
							    <label>Endereço</label>
							    <input type="text" name="addresMember" value={form.addresMember}  className={ errors.errorAddresMember ? "input is-invalid" : "input"} id="inputAddress" placeholder="Rua, Avenida, Travessa..." onChange={e => handleChange(e)}/>
						      	{ errors.errorAddresMember && <p className="text-danger"><small className="help-inline">{errors.errorAddresMember}</small></p>}
							  </div>
							  <div className="form-group col-md-2">
							    <label>Número</label>
							    <input type="text" name="numberAddressMember"  className={ errors.errorNumberAddres ? "input is-invalid" : "input"} id="inputAddress2" placeholder="Número" onChange={e => handleChange(e)}/>
							  </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-md-6">
						      <label>Cidade</label>
						      <input type="text" name="cityAddress"  className={ errors.errorCityAddress ? "input is-invalid" : "input"} id="inputCity" onChange={e => handleChange(e)}/>
							  { errors.errorCityAddress && <p className="text-danger"><small className="help-inline">{errors.errorCityAddress}</small></p>}
						    </div>
						    <div className="form-group col-md-4">
						      <label>Estado</label>
						      <select name="staterAddres" id="inputState"  className={ errors.errorStaterAddres ? "input is-invalid" : "input"} onChange={e => handleChange(e)}>
						        <option value="1">Choose...</option>
						        <option value="2">...</option>
						      </select>
							  { errors.errorStaterAddres && <p className="text-danger"><small className="help-inline">{errors.errorStaterAddres}</small></p>}
						    </div>
						    <div className="form-group col-md-2">
						      <label>CEP</label>
						      <input type="text" name="cepAddress"  className={ errors.errorCepAddress ? "input is-invalid" : "input"} id="inputZip" onChange={e => handleChange(e)} />
							  { errors.errorCepAddress && <p className="text-danger"><small className="help-inline">{errors.errorCepAddress}</small></p>}
						    </div>
						  </div>
						  <div className="form-row">
							  <div className="form-group col-sm-12 col-md-6">
							    <div className="form-check">
							      <input className="form-check-input" name="hasBaptism" type="checkbox" id="gridCheck" onChange={e => handleChange(e)}/>
							      <label className="form-check-label">
							       	Batizado nas águas
							      </label>
							    </div>
							  </div>
							  <div className="form-group col-sm-12 col-md-6">
							  	<div className="form-check">
							      <input className="form-check-input" name="isActive" type="checkbox" id="isActive" onChange={e => handleChange(e)}/>
							      <label className="form-check-label">
							      	Membro Ativo
							      </label>
							    </div>
							  </div>
							</div>
						  <button type="submit" className="button button-submit">{loading ? "Enviando..." : "Enviar"}</button>
						  {props.role}
						</form>
				</Grid>
			</div>
		</div>

		</>
	)
}