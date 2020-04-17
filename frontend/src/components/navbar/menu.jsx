import React from 'react'
import { Link } from 'react-router-dom'

function linkMenu(props){
	return(

	<ul className="navbar-nav mr-auto">
	  <li className="nav-item active">
	    <Link className="nav-link brand" to="/">Inicio</Link>
	  </li>
	  <li className="nav-item">
	    <Link className="nav-link" to="/members/create">Novo Membro</Link>
	  </li>
	   <li className="nav-item">
	   <Link className="nav-link" to="/cell/create">Nova Célula</Link>
	  </li>
	   <li className="nav-item">
	   	<Link className="nav-link" to="/teste404">404</Link>
	  </li>

	</ul>

)}

export default linkMenu