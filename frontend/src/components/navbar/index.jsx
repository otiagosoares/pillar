import React from 'react'
import Menu from './menu'
import {FiPower, FiUser} from 'react-icons/fi'

function Navbar(props) {

    return(
    <>
    	<nav className="navbar navbar-dark navbar-expand-lg bg-light">
		  <span className="navbar-brand" href="/">Pillar</span>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="./navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">

		    <Menu />

		    <div className="user-name-nav"><span className="badge badge-info"> <FiUser /> Olá! {props.userName}</span></div>
		    <div className="btn-logout">
				<a href='/' className="badge badge-danger">
					<span><FiPower/></span>
				</a>
				</div>
		  </div>
		</nav>		    
    </>
    )
}

export default Navbar