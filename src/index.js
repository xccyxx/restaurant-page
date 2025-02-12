import { initializeHomeContent } from "./home.js";
import initializeMenuContent from "./menu.js";
import initializeAboutContent from "./about.js";
import "./styles.css";


const content = document.querySelector("#content");

// set up buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Reset content div
        content.replaceChildren();

        // conditionally render content
        if (button.classList.contains("home")) {
            initializeHomeContent();
        }

        if (button.classList.contains("menu")) {
            initializeMenuContent();
        }

        if (button.classList.contains("about")) {
            initializeAboutContent();
        }
    })
})

// Pre-populate Home content
document.addEventListener("DOMContentLoaded", (event) => {
    initializeHomeContent();
  });

