
const div = document.createElement("div")
div.setAttribute("id", "main-div");


const header = function() {
	const title = document.createElement("h2")
	const node = document.createTextNode("Contact");
	title.appendChild(node);

	div.appendChild(title);
}


const contactInfo = function() {
	const phone = document.createElement("p")
	phone.innerText = "Phone: 555-555-5555"

	const email = document.createElement("p")
	email.innerText = "Email: tasty@meals.com"

	const address = document.createElement("p")
	address.innerText = "1234 Tasty Meal Dr. Los Angeles, California"

	let toAppend = [phone, email, address]
	toAppend.forEach((el) => {div.appendChild(el); console.log(el)})
	// div.appendChild(phone);
}


const contact = function() {
	header()
	// tab()
	contactInfo()
	return div
}

export {contact};





