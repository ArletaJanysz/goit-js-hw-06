const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const { email, password } = loginForm.elements;

	if (email.value === "" || password.value === "") {
		alert("Uzupełnij wszystkie pola formularza!");
		return;
	}

	const formDataObject = {
		email: email.value,
		password: password.value,
	};

	console.log(formDataObject);
	loginForm.reset();
});
