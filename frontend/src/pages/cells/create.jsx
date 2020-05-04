import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Editor from '../../components/editor'

export default (props) => {

	return(
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Editor editorState='' />			
					</div>
				</div>
			</div>
		</>

	)
}