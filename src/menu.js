import californiaRollImg from './assets/california_roll.jpg';
import spicyTunaRollImg from "./assets/spicy_tuna_roll.jpg";
import dragonRollImg from "./assets/dragon_roll.jpg";

import "./styles.css";



export default function() {
    const content = document.querySelector("#content");

    // A list to container divs
    const containersList = [ "header", "items" ];

    containersList.forEach(container => {
        const containerDiv = document.createElement("div");

        if (container === "header") {
            const header = document.createElement("h2");
            header.textContent = "Menu";
            containerDiv.append(header);
        }

        if (container === "items") {
            containerDiv.classList.add("itemsContainer");
        }

        content.append(containerDiv);
    })


    // A list to contain items details
    const dishes = [
        { 
            title: "California Roll",
            description: "A classic roll with fresh crab, avocado, and cucumber wrapped in nori and sushi rice, topped with sesame seeds.",
            price: "$4",
            imgSrc: californiaRollImg
        },
        { 
            title: "Spicy Tuna Roll",
            description: "Fresh tuna mixed with spicy mayo, cucumber, and avocado, rolled up with a hint of wasabi for a bold flavor.",
            price: "$6",
            imgSrc: spicyTunaRollImg
        },
        { 
            title: "Dragon Roll",
            description: "Shrimp tempura and avocado rolled together, topped with thin slices of eel, eel sauce, and spicy mayo for a sweet and savory kick.",
            price: "$7",
            imgSrc: dragonRollImg
        },
        { 
            title: "Salmon Nigiri",
            description: "Thinly sliced fresh salmon served atop a small mound of seasoned sushi rice for a simple yet flavorful bite.",
            price: "$4",
            imgSrc: ""
        },
        { 
            title: "Tempura Udon",
            description: "A warm bowl of udon noodles in a savory broth, accompanied by crispy tempura vegetables and shrimp.",
            price: "$7",
            imgSrc: ""
        },
        { 
            title: "Vegetable Maki",
            description: "A refreshing vegetarian roll with cucumber, avocado, pickled radish, and carrots, wrapped in nori and rice.",
            price: "$4",
            imgSrc: ""
        }
    ]

    // Loop through the list items to render divs
    const itemsContainer = document.querySelector(".itemsContainer");
    dishes.forEach(dish => {
        const dishContainer = document.createElement("div");
        // Append the title
        const title = document.createElement("h3");
        title.textContent = dish.title;
        dishContainer.append(title);

        // Append Img
        const img = document.createElement("img");
        img.classList.add("dishImg");
        img.src = dish.imgSrc;
        img.alt = dish.title;
        dishContainer.append(img);


        // Append the description
        const description = document.createElement("p");
        description.textContent = dish.description;
        dishContainer.append(description);
        

        // Append the price
        const price = document.createElement("h4");
        price.textContent = dish.price;
        dishContainer.append(price);

        itemsContainer.append(dishContainer);
    });
    content.append(itemsContainer);
}
