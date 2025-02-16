import californiaRollImg from './assets/california_roll.jpg';
import spicyTunaRollImg from "./assets/spicy_tuna_roll.jpg";
import salmonNigiriImg from "./assets/salmon_nigiri.jpg";
import tempuraUdoniImg from "./assets/tempura_udon.jpg";
import veggieMakiImg from "./assets/veggie_maki.jpg";
import unagiDonburiImg from "./assets/unagi_donburi.jpg";


export default function() {
    const content = document.querySelector("#content");

    // A list to section divs
    const sections = [ "header", "items" ];

    sections.forEach(section => {
        const sectionDiv = document.createElement("div");

        if (section === "header") {
            const header = document.createElement("h2");
            header.textContent = "Menu";
            sectionDiv.classList.add("header");
            sectionDiv.append(header);
        }

        if (section === "items") {
            sectionDiv.classList.add("itemSection");
        }

        content.append(sectionDiv);
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
            title: "Salmon Nigiri",
            description: "Thinly sliced fresh salmon served atop a small mound of seasoned sushi rice for a simple yet flavorful bite.",
            price: "$4",
            imgSrc: salmonNigiriImg
        },
        { 
            title: "Tempura Udon",
            description: "A warm bowl of udon noodles in a savory broth, accompanied by crispy tempura vegetables and shrimp.",
            price: "$7",
            imgSrc: tempuraUdoniImg
        },
        { 
            title: "Vegetable Maki",
            description: "A refreshing vegetarian roll with cucumber, avocado, pickled radish, and carrots, wrapped in nori and rice.",
            price: "$4",
            imgSrc: veggieMakiImg
        },
        { 
            title: "Unagi Donburi",
            description: "Grilled eel glazed with a sweet soy-based sauce, served over a bowl of steaming white rice for a satisfying and flavorful meal.",
            price: "$9",
            imgSrc: unagiDonburiImg
        }
    ]

    // Loop through the list items to render divs
    const itemSection = document.querySelector(".itemSection");
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
        itemSection.append(dishContainer);
    });
    content.append(itemSection);
}
