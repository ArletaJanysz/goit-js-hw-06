const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
	const name = nameInput.value.trim(); // Usunięcie ewentualnych białych znaków na początku i końcu
	nameOutput.textContent = name === "" ? "Anonymous" : name;
});
