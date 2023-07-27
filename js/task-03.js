const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryList = document.querySelector(".gallery");

images.forEach((image) => {
	// utworzenie elementu li
	const listItem = document.createElement("li");
	// dodanie klasy dla li
	listItem.classList.add("gallery-item");

	// utworzenie img tagów i dodanie im właściwości
	const imgTag = document.createElement("img");
	imgTag.src = image.url;
	imgTag.alt = image.alt;

	// dodanie imgTag do listItem
	listItem.appendChild(imgTag);

	//dodanie elementów li do listy galerii
	galleryList.appendChild(listItem);
});

const pictures = document.querySelectorAll("img");
pictures.forEach((element) => {
	element.style.width = "800px";
	element.style.height = "auto";
	element.style.border = "solid black 5px";
	element.style.padding = "5px";
});

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.flexDirection = "column";
galleryList.style.gap = "50px";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";
