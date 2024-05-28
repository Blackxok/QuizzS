let Up_name = document.getElementById('Up_name')
let Up_email = document.getElementById('Up_email')
let Up_pass = document.getElementById('Up_pass')
let Up_re_pass = document.getElementById('Up_re_pass')

// name Validation;
isValidName = e => {
	let er = /^[a-zA-Z0-9_]{3,16}$/
	return er.test(e)
}
function validName() {
	if (isValidName(Up_name.value) || Up_name.value.length === 0) {
		Up_name.classList.remove('wrong')
	} else {
		Up_name.classList.add('wrong')
	}
}
// email validation
isValidEmail = e => {
	let pa = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	return !!e.match(pa)
}
function validEmail() {
	if (isValidEmail(Up_email.value) || Up_email.value.length === 0) {
		Up_email.classList.remove('wrong')
	} else {
		Up_email.classList.add('wrong')
	}
}

// pass validation
isValidPass = () => {
	if (Up_pass.value.length > 7 || Up_pass.value.length === 0) {
		Up_pass.classList.remove('wrong')
	} else {
		Up_pass.classList.add('wrong')
	}
}
isRePass = () => {
	Up_re_pass.value === Up_pass.value
		? Up_re_pass.classList.remove('wrong')
		: Up_re_pass.classList.add('wrong')
}

////////////////////////////////////////////////////////////////////////
function register(event) {
	event.preventDefault()

	const login = document.getElementById('login').value
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const password = document.getElementById('pass').value
	const agreeTerm = document.getElementById('agree-term').checked

	if (!agreeTerm) {
		alert('You must agree to the terms of service.')
		return
	}

	const data = {
		login: login,
		password: password,
		name: name,
		email: email,
	}

	fetch('https://myblog.education-online.uz/auth/registration', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data)
			alert('Registration successful!')
		})
		.catch(error => {
			console.error('Error:', error)
			alert('Registration failed. Please try again.')
		})
}
