const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

// Pobranie referencji do listy ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Iteracja przez tablicę ingredients
ingredients.forEach((ingredient) => {
	// Utworzenie elementu <li>
	const listItem = document.createElement("li");

	// Dodanie zawartości tekstowej do elementu <li>
	listItem.textContent = ingredient;

	// Dodanie klasy "item" do elementu <li>
	listItem.classList.add("item");

	// Dodanie elementu <li> do listy ul#ingredients
	ingredientsList.appendChild(listItem);
});
