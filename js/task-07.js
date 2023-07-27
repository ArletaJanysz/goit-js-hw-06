const fontSizeCtrl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeCtrl.addEventListener("input", () => {
	const fontSize = fontSizeCtrl.value + "px";
	textElement.style.fontSize = fontSize;
});
