const validateEmail = (email=null) => {

    if(email){

		var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    	if(er.test(email)){

    		return true

    	}
    	
	}else{

		//console.log('false!')
		return false

	}
}

	//validar campos do formulário
	const validateFormMember = (form) => {

		let errors = {}

		var dateBirth = new Date(form.birthMember)
		var today = Date.now();
		var oneYear = 1000*60*60*24*365;
		var age = round( (today - dateBirth) / oneYear , 0)

		if(!form.birthMember || age <= 0){			

			if(age <= 0){

				errors.errorBirthMember = "A data Informada nao pode ser maior que a data de Hoje."
				return false
			
			}

			errors.errorBirthMember = "Incira a data de nasmento válida."

		}

		if(!form.nameMember || form.nameMember.length < 3 ){
			errors.errorNameMember = "Preencha com um nome válido."
		}

		if(!form.emailMember || !validateEmail(form.emailMember)){
			errors.errorEmailMember = "Preencha com um email válido."
		}

		if (!form.phoneMember || form.phoneMember.length < 11  ) {

			errors.errorPhoneMember = "Informe um telefone válido."
		}
		if (!form.cel|| form.cel.length < 11  ) {

			errors.errorCel = "Informe um  Celular válido."
		}

		if (!form.addresMember || form.addresMember.length < 5  ) {

			errors.errorAddresMember = "Informe um endereço válido."
		}

		return errors
	}

const round = (num, places) => {

	if (!("" + num).includes("e")) {

		return +(Math.round(num + "e+" + places)  + "e-" + places);

	} else {

		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}

export { 
	validateEmail, 
	round, 
	validateFormMember
 }