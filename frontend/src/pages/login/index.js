import React, { useState} from 'react';
import {Redirect } from 'react-router-dom';

import { validateEmail } from '../../helpers/validateHelper';
import api from '../../services/api';
import { login } from '../../services/auth';

import Loader from '../../components/loader';
import {FiUsers, FiLock} from 'react-icons/fi';
import './style.css';

export default function Login(){

	const displayName = 'Login - Pillar';
	document.title = displayName;

	const [ error, setError ] = useState({message: undefined});
	const [ loader, setLoader ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ redirect, setRedirect ] = useState(false);

	const handleSubmit = (event) =>{
		event.preventDefault();
		var hasError = false;
		setLoader(true);
		
		if(!email || !password ){
			setError({ message: 'Preencha email e senha.'});
			hasError = true;
			setLoader(false);
		}

		if(!validateEmail(email)){
			setError({ message: 'Preencha um Email valido.'});
			hasError = true;
			setLoader(false);
		}

		if(error.message == undefined || !hasError){

			api.post('/login', {}, {
				auth: {
					username: email,
					password: password
				}
			}).then(result => {

				if(result.data.error || result.data.auth == false){

					console.log(result.data);
					setError({message : result.data.error});
					setLoader(false);
	
				}else{
					// gravar TOKEN no localStorage e Cookies				
					login(result.data.token);
					setRedirect(true);
				}
			}).finally(()=>{

				setLoader(false);
			}).catch(err =>{
				console.error({'Erro': err});
				setError({message: 'OOps... Erro ao Processar sua solicitação, favor contatar o admnistrador. Erro: ' + err});

			})
			
		}
	}

	if(redirect){
		return(
			<Redirect to='/' useHistory />
		)
	}

	return(
		<>
			<div className="box-login">
				<div className="header-login">
					<h1><FiUsers /></h1>
					<h1>Pillar</h1>
					<span><FiLock /> - Administrador de Grupos Pequenos</span>
				</div>
				<div className="body-login">
					
					<form action="/login" method="post" onSubmit={handleSubmit}>

						<input className="input" type="email"
							onChange={ e => setEmail(e.target.value)}
							value={email}
							name="email"
							placeholder="Digite seu Email."
							required
						/>
						<input className="input" type="password"
							onChange={e => setPassword(e.target.value)}
							value={password}
							name="password"
							placeholder="Digite sua senha de 6 dígitos."
							required="Preencha senha com 6 dígitos."
						/>
						<button className="button button-submit" type="submit"> entrar </button>
					</form>
				</div>
				<div className="footer-login">
					{ (error.message) ? <div className="alert alert-error">{error.message}</div>  : <span></span>}
					<Loader loader={loader} />			
				</div>
			</div>
		</>
	)
}