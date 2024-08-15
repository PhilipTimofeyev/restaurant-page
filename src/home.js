
const div = document.createElement("div")
div.setAttribute("id", "main-div");


const header = function() {
	const title = document.createElement("h2")
	const node = document.createTextNode("Home");
	title.appendChild(node);

	div.appendChild(title);
}

const tab = function() {
	const tabName = document.createElement("h3")
	const node = document.createTextNode("Tasty meals and even tastier meals!");
	tabName.appendChild(node);

	div.appendChild(tabName);
}

const welcome = function() {
	const welcomeParagraph = document.createElement("p")
	const node = document.createTextNode("'At Tasty Meals we believe that soul is at the heart of every meal.' - Chef Tasty");
	welcomeParagraph.appendChild(node);

	div.appendChild(welcomeParagraph);
}


const home = function() {
	header()
	tab()
	welcome()
	return div
}

export {home};

