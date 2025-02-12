import { initializeHomeContent } from "./home.js";
import initializeMenuContent from "./menu.js";
import initializeAboutContent from "./about.js";

// set up buttons
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
// Reset content div
content.replaceChildren();

initializeHomeContent();
initializeMenuContent();
initializeAboutContent();