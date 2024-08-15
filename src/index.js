import "./styles.css";
import { home } from "./home.js";

// home()

const homeBtn = document.getElementById('homeBtn')

homeBtn.addEventListener("click", function() {
	home()
});
