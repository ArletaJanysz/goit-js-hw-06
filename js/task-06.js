const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
	const expectedLength = parseInt(validationInput.getAttribute("data-length"));
	// wskazówka: zamiast validationInput.getAttribute("data-length") też
	// można pisać validationInput.dataset.length
	const enteredValue = validationInput.value.trim();

	if (enteredValue.length === expectedLength) {
		validationInput.classList.remove("invalid");
		validationInput.classList.add("valid");
	} else {
		validationInput.classList.remove("valid");
		validationInput.classList.add("invalid");
	}
});
