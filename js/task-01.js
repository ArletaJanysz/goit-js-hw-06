const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

// Liczba kategorii
const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}\n`);

// Dla każdego elementu li.item na liście ul#categories
categoriesItems.forEach((item) => {
	// Znajdź tekst nagłówka elementu (tag <h2>)
	const categoryTitle = item.querySelector("h2").textContent;

	// Liczba elementów w danej kategorii (wszystkich w jej obrębie <li>)
	const elementsCount = item.querySelectorAll("li").length;

	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${elementsCount}\n`);
});
