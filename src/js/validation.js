let regex = {
	required: () => /^(?!\s*$).+/,
	minlength: (min) => `/^.{${min},}$/`,
	maxlength: (max) => `/^.{${max},}$/`,
	email: () => /[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]{2,5}/,
	phone: () => /^[6-9]{9}$/,
	digit: () => /^[0-9]*$/,
	password: () => /[\w\/!\@\#\$\%\*\^\&(|)?\S]{8,15}/

}

function checkPattern(val, pattern) {

	// var element = document.getElementsByName(val).value;
	if (val.match(pattern)) {
		return true;
	}
	else {
		return false;
	}
}


//  function checkAlphaNumeric(val){

// 	var value = document.getElementsByName(val).value;
// 	var regex = "/\w+/";
// 	if(regex.test(value)){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}

// }

function checkConfirmPassword(password, confirmPassword) {
	var value1 = document.getElementsByName(password).value;
	var value2 = document.getElementsByName(confirmPassword).value;

	if (value1 === value2) {
		return true;
	}
	else {
		return false;
	}
}

function createMessage(html, message) {
	let span = `<span class="error ${html.name}">${message}</span>`
	html.outerHTML += span
}

function deleteAllErrorMessages() {
	let selector = 'span.error'
	let errors = document.querySelectorAll(selector)
	debugger;
	for(let [key,error] of errors.entries()) {
		error.outerHTML = ''
	}
}

export function validate(json) {
	deleteAllErrorMessages()
	var rules = json.rules;
	var messages = json.messages;
	var message;
	for (let rule in rules) {
		let html = document.getElementsByName(rule)[0];
		let value = html.value;
		for (let key in rules[rule]) {
			// let keyValue = rules[rule][key];
			switch (key) {
				case "required" || "minlength" || "maxlength" || "email" || "digit": {
					debugger;
					let pattern = regex[key.toLowerCase()]();
					if(!checkPattern(value, pattern)) {
						let message = messages[rule][key];
						createMessage(html, message)
					}
					break;
				}
				
				case "equalTo": {
					if (!checkConfirmPassword(value)) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
					}
					break;
				}

				case "ownrule" : {
					
					break;
				}
				default: {
					console.log(key);
				}
			}
		}
	}

}

