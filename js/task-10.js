function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	const boxesDiv = document.getElementById("boxes");
	boxesDiv.innerHTML = ""; // Clear previous boxes

	let boxSize = 30;
	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		box.style.width = boxSize + "px";
		box.style.height = boxSize + "px";
		box.style.backgroundColor = getRandomHexColor();
		boxesDiv.appendChild(box);

		boxSize += 10;
	}
}

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", () => {
	const boxesDiv = document.getElementById("boxes");
	boxesDiv.innerHTML = "";
});

document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  createButton.addEventListener('click', () => {
    const amountInput = document.querySelector('input[type="number"]');
    const amount = parseInt(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid number greater than 0.');
      return;
    }

    createBoxes(amount);
  });

})