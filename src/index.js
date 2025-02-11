import { initializeHomeContent } from "./home.js";
import initializeMenuContent from "./menu.js";
import initializeAboutContent from "./about.js";

    
// Reset content div
content.replaceChildren();

initializeHomeContent();
initializeMenuContent();
initializeAboutContent();