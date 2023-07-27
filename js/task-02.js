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

// Utowrzenie pustej tablicy do przechowywania elementów <li>
const listItems = [];

// Iteracja przez tablicę ingredients i tworzenie elementów <li>
ingredients.forEach((ingredient) => {
	// Utworzenie elementu <li>
	const listItem = document.createElement("li");

	// Dodanie zawartości tekstowej do elementu <li>
	listItem.textContent = ingredient;

	// Dodanie klasy "item" do elementu <li>
	listItem.classList.add("item");

	// Dodanie elementu <li> do listy ul#ingredients
	listItems.push(listItem);
});

ingredientsList.append(...listItems);