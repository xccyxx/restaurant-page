import { initializeHomeContent } from "./home.js";
import initializeMenuContent from "./menu.js";
    
// Reset content div
content.replaceChildren();

initializeHomeContent();
initializeMenuContent();