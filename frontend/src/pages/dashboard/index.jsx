import React from 'react'
import Navbar from '../../components/navbar'

import Grid from '../../components/grid'



export default (props) => (
	<>

	<Navbar userName='Tiago' />

	<div className="container">
				<br/>
				<h1>Pillar <small>Administrador de Células</small> </h1>
				<hr/>
		<div className="row">
			<Grid cols="12 12">
				<div className="btn btn-success">
				 	Membros Ativos <span className="badge badge-light">68</span>
				</div>
			
				<div className="btn btn-danger">
				 	Chamadas Pendentes <span className="badge badge-dark">9</span>
				</div>
				<div className="btn btn-info">
				 	Chamadas Pendentes <span className="badge badge-dark">9</span>
				</div>
			</Grid>
		</div>
		<div className="row">
			<Grid cols="12 12 6">
				<div className="card"> 
					<div className="card-header"> 
						<h3>Avisos</h3>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>
				</div>
			</Grid>
			<Grid cols="12 12 6">
				<div className="card"> 
					<div className="card-header"> 
						<h3>Estudos</h3>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>
					<div className="card-body"> 
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, suscipit reiciendis quae! Assumenda quae alias distinctio, hic! Consequatur, velit in perferendis. Ipsam quod accusamus possimus, rem reprehenderit natus doloribus!</p>
					</div>					
				</div>
			</Grid>
		</div>
	</div>
	</>
)