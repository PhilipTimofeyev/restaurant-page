import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

// console.log(home())

const content = document.getElementById('content')
const homeBtn = document.getElementById('homeBtn')
const menuBtn = document.getElementById('menuBtn')
const contactBtn = document.getElementById('contactBtn')

const homeTab = home()
const menuTab = menu()
const contactTab = contact()

homeBtn.addEventListener("click", function() {
	let currentChild = content.children[0]
	if (content.children[0]) { 
		content.replaceChild(homeTab, currentChild)
	}
});

menuBtn.addEventListener("click", function() {
	let currentChild = content.children[0]
	if (content.children[0]) { 
		content.replaceChild(menuTab, currentChild)
	}
});

contactBtn.addEventListener("click", function() {
	let currentChild = content.children[0]
	if (content.children[0]) { 
		content.replaceChild(contactTab, currentChild)
	}
});