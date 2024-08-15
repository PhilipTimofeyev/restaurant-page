
const content = document.getElementById('content')

const home = function() {
	header()
	tab()
	welcome()
}


const header = function() {
	const title = document.createElement("h2")
	const node = document.createTextNode("Home");
	title.appendChild(node);

	content.appendChild(title);
}

const tab = function() {
	const tabName = document.createElement("h3")
	const node = document.createTextNode("Tasty meals and even tastier meals!");
	tabName.appendChild(node);

	content.appendChild(tabName);
}

const welcome = function() {
	const welcomeParagraph = document.createElement("p")
	const node = document.createTextNode("At Tasty Meals we believe that soul is at the heart of every meal.");
	welcomeParagraph.appendChild(node);

	content.appendChild(welcomeParagraph);
}


export {home};