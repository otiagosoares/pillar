
import React, { Fragment }from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
export default (props) => (
	<Fragment>
	
	<Navbar />
	<div className="container">
		<div className="row">
			<div className="col-sm-12">
				<div className='card'>
					<div className="card-header">
						<h1><span className="badge badge-warning">404</span></h1>
					</div>
					<div className="card-body">
						<h3>Página nao enconrtada</h3>
						 <Link className="btn btn-primary" to="/">Voltar para o Dashboard</Link>
					</div>
				</div>
			</div>
		</div>
	</div>

	</Fragment>
)