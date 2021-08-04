(function() {
	let form = document.querySelector('#contact_form');
	let emailInput = document.querySelector('#contact-email');
	let messageInput = document.querySelector('#contact-message');

	function validateEmail() {
		let value = emailInput.value;

		if (!value) {
			showErrorMessage (emailInput, 'Email is a required field.');
			return false;
		}

		if (value.indexOf('@') === -1) {
			showErrorMessage (emailInput, 'Please enter a valid email address.')
			return false;
		}

		showErrorMessage(emailInput, null);
		return true;
	}

	function validateMessage() {
		let value = messageInput.value;

		if (!value) {
			showErrorMessage (messageInput, 'A message is required.')
		}
	}

	function validateForm() {
		let isValidEmail = validateEmail();
		let isValidMessage = validateMessage();
		return isValidEmail && isValidMessage;
	}

	function showErrorMessage(input, message) {
		let container = input.parentElement;

		// Remove an existing error
		let error = container.querySelector('.error-message');
		if (error) {
			container.removeChild(error);
		}

		// Now add the error if the message isn't empty
		if (message) {
			let error = document.createElement('div');
			error.classList.add('error-message');
			error.innerText = message;
			container.appendChild(error);
		}
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //prevents it from submitting to the server
		if (validateForm()) {
			alert('Success!');
		}
	})

	emailInput.addEventListener('input', validateEmail);
	messageInput.addEventListener('input', validateMessage);
})();
