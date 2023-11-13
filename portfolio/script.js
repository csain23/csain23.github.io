(function () {
   'use strict';
}());

//CONTACT FORM AREA
function checkForm() {
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var error = document.getElementById("formErrors");
	var errorsFound = false;
	
	//firstName
	if (!firstName.value) {
		errorsFound = true;
		var firstNameErr = document.createElement("li");
		firstNameErr.textContent = "Missing first name.";
		error.appendChild(firstNameErr);
		//css input.error
		var hidden1 = document.getElementById("firstName");
		hidden1.classList.add("error");
	}
	//lastName
	if (!lastName.value) {
		errorsFound = true;
		var lastNameErr = document.createElement("li");
		lastNameErr.textContent = "Missing last name.";
		error.appendChild(lastNameErr);
		//css input.error
		var hidden2 = document.getElementById("lastName");
		hidden2.classList.add("error");
	}
	//email
	if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
		errorsFound = true;
		var emailErr = document.createElement("li");
		emailErr.textContent = "Invalid or missing email address.";
		error.appendChild(emailErr);
		//css input.error
		var hidden3 = document.getElementById("email");
		hidden3.classList.add("error");
	}
	//clear errors
	if (errorsFound === false) {
		error.style = "display: none";
		firstName.style = "border: 1px solid #aaa;";
		lastName.style = "border: 1px solid #aaa;";
		email.style = "border: 1px solid #aaa;";
		document.getElementById("contactForm").reset();
		window.alert("Thanks for dropping us a line.");
	}
}

document.getElementById("mySubmit").addEventListener("click", function(event) {
	checkForm();
	event.preventDefault();
});

