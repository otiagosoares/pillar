import React, { useState} from 'react'
import Navbar from '../../components/navbar'

export default (props) => {

	const [repositories, setRepositories] = useState([	

			{ id: 1, name: 'repo-1'},
			{ id: 2, name: 'repo-2'},
			{ id: 3, name: 'repo-3'},
			{ id: 4, name: 'repo-4'}

		])	

	const handleAddRepository = ()=> {
		setRepositories([
			... repositories, { id:Math.random(), name: 'New Repo...'}
			])
	}

	return(
		<>
		<Navbar userName="Tiago" />
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<ul>
						{ repositories.map(repo =>(
							<li key={repo.id}>{repo.name}</li>
						))}
					</ul>

					<button className='btn btn-success' onClick={handleAddRepository}>
						Add
					</button>
				</div>
			</div>
		</div>
		</>

	)
}