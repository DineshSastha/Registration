

function checkRequired(val) {

	// var element = document.getElementsByName(val).value;
	if (val === "" || val === undefined || val === null) {
		return false;
	}
	else {
		return true;
	}
}

function checkPassword(val) {
	// var password = document.getElementsByName(val).value;
	var regex = "/[\w\!\@\#\$\%\*\^\&(|)?\S]{8,}/";
	if (regex.match(val)) {
		return true;
	}
	else {
		return false;
	}
}

function checkEmail(val) {
	// var email = document.getElementsByName(val).value;
	var regex = "/[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]{2,5}/";
	if (regex.match(val)) {
		return true;
	}
	else {
		return false;
	}
}

function checkMaxlength(val, maxlength) {
	// var max = document.getElementsByName(val).value;
	if (val.length === maxlength) {
		return true;
	}
	else {
		return false;
	}
}

function checkMinlength(val, minlength) {
	// var min = document.getElementsByName(val).value;
	if (val.length === minlength) {
		return true;
	}
	else {
		return false;
	}
}

function checkPhone(val) {
	// var num = document.getElementsByName(val).value;
	var regex = "/^[6-9]{9}$/";
	if (regex.match(val)) {
		return true;
	}
	else {
		return false;
	}
}
function checkNumberOnly(val) {
	// var value = document.getElementsByName(val).value;
	if (isNaN(val)) {
		return false;
	}
	else {
		return true;
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



export function validate(json) {
	debugger;
	console.log(JSON.stringify(json));
	var rules = json.rules;
	var messages = json.messages;
	var message;
	for (let rule in rules) {
		let html = document.getElementsByName(rule)[0];
		console.log(html);
		let value = html.value;
		for (let key in rules[rule]) {
			debugger;
			// let keyValue = rules[rule][key];
			switch (key) {
				case "required": {
					if (!checkRequired(value)) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
						// var x = document.querySelectorAll("span");
						// for(let i in x){
						// 	document.querySelector(i).innerHTML = message;
						// }
					}
					break;
				}
				case "minlength": {
					if (!checkMinlength(value, rules[rule][key])) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
					}
					break;
				}
				case "maxlength": {
					if (!checkMaxlength(value, rules[rule][key])) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
					}
					break;
				}
				case "email": {
					if (!checkEmail(value)) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
					}
					break;
				}
				case "digits": {
					if (!checkNumberOnly(value) && !checkPhone(value)) {
						message = messages[rule][key];
						console.log(message);
						html.innerHTML = message;
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
				default: {
					console.log(key);
				}
			}
		}
	}

}

