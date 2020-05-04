import React, { useState } from 'react'
import {Redirect, Link } from 'react-router-dom';

import Menu from './menu'
import {FiUser, FiLogOut} from 'react-icons/fi';

import { logout } from '../../services/auth';

const BtnLogout = () => {

	const [ redirect, setRedirect ] = useState(false);

	const handleLogout = ()=>{
		logout();
		setRedirect(true);
	}

	if(redirect){
		return(
			<Redirect to='/login' useHistory />
		)
	}
	
	return(
		<div className="btn-logout">
			<Link to="" onClick={handleLogout} title="Sair" className="badge badge-danger">
				<span><FiLogOut/></span> Sair
			</Link>
		</div>
	)	
	
}

const MenuNavbar =  (props) => {

	const [on, setOn] = useState(false)
	const [collapsed, setCollapsed] = useState("collapse navbar-collapse")

	const userName = "Tiago Soares";
	const role = props.role;

	function handleToggleMenu(event){

		if(!on){

			setCollapsed('navbar-collapse')
			setOn(true)
		}else{

			setCollapsed('collapse navbar-collapse')
			setOn(false)
		}
	}
	
    return(
		<>
			<nav className="navbar navbar-dark navbar-expand-lg bg-light navbar-right">

			<span className="navbar-brand" href="/">Pillar</span> 

			<button className="navbar-toggler" type="button" onClick={handleToggleMenu}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className={collapsed} id="navbarSupportedContent">

				<Menu />

				<div className="user-name-nav"><span className="badge badge-info"> <FiUser /> Olá! {userName}</span></div>
				<BtnLogout />
			</div>
			</nav>		    
		</>
    )
}

export default MenuNavbar;
