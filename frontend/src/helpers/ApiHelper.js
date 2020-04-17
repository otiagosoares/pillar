const Api = (value, imput) => {

	let label = document.getElementById(imput)

	if (!value || value.length < 3) {	

		label.classList.add('is-invalid')
		label.insertAdjacentHTML("beforeend", "<span style='color:red'> Este compo deve ter no mínimo 3 letras.</span>")
		
		return false
	}

	return true
}

const validateEmail = (value, imput) => {

	return value
}

export default Api