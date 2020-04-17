import React from 'react'

const Loader = props =>{
	if(props.loader){
		return(
			<div className="loader">
				<span></span>
				<span></span>
			</div>
		)
	}else{
		return('')
	}
}

export default  Loader
