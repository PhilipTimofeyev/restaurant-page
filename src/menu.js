
const div = document.createElement("div")
div.setAttribute("id", "main-div");


const header = function() {
	const title = document.createElement("h2")
	const node = document.createTextNode("Menu");
	title.appendChild(node);

	div.appendChild(title);
}

const lunch = function() {
	const lunchHeading = document.createElement("h3")
	const node = document.createTextNode("Lunch");
	lunchHeading.appendChild(node);

	div.appendChild(lunchHeading);

	let menuItems = ["Chicken Wings (8)", "Burger", "Cheeseburger", "Pizza", "Fries"];

	menuItems.forEach((el) => {
	    let li = document.createElement('li');
	    li.innerText = el;
	    div.appendChild(li);
	})
}

const dinner = function() {
	const dinnerHeading = document.createElement("h3")
	const node = document.createTextNode("Dinner");
	dinnerHeading.appendChild(node);

	div.appendChild(dinnerHeading);

	let menuItems = ["Steak", "Filet Mignon", "Carbonara Pasta", "Salmon", "Salad"];

	menuItems.forEach((el) => {
	    let li = document.createElement('li');
	    li.innerText = el;
	    div.appendChild(li);
	})
}

const menu = function() {
	header()
	lunch()
	dinner()
	// welcome()
	return div
}

export {menu};





