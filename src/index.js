import { initializeHomeContent } from "./home.js";
import initializeMenuContent from "./menu.js";
import "./styles.css";
    
// Reset content div
content.replaceChildren();

initializeHomeContent();
initializeMenuContent();