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
    const contentItems = [
        { 
            title: "California Roll",
            description: "A classic roll with fresh crab, avocado, and cucumber wrapped in nori and sushi rice, topped with sesame seeds.",
            price: "$4"
        },
        { 
            title: "Spicy Tuna Roll",
            description: "Fresh tuna mixed with spicy mayo, cucumber, and avocado, rolled up with a hint of wasabi for a bold flavor.",
            price: "$6"
        },
        { 
            title: "Dragon Roll",
            description: "Shrimp tempura and avocado rolled together, topped with thin slices of eel, eel sauce, and spicy mayo for a sweet and savory kick.",
            price: "$7"
        },
        { 
            title: "Salmon Nigiri",
            description: "Thinly sliced fresh salmon served atop a small mound of seasoned sushi rice for a simple yet flavorful bite.",
            price: "$4"
        },
        { 
            title: "Tempura Udon",
            description: "A warm bowl of udon noodles in a savory broth, accompanied by crispy tempura vegetables and shrimp.",
            price: "$7"
        },
        { 
            title: "Vegetable Maki",
            description: "A refreshing vegetarian roll with cucumber, avocado, pickled radish, and carrots, wrapped in nori and rice.",
            price: "$4"
        }
    ]

    // Loop through the list items to render divs
    const itemsContainer = document.querySelector(".itemsContainer");
    contentItems.forEach(item => {
        const itemDiv = document.createElement("div");
        // Append the title
        const title = document.createElement("h3");
        title.textContent = item.title;
        itemDiv.append(title);

        // Append the description
        const description = document.createElement("p");
        description.textContent = item.description;
        itemDiv.append(description);
        

        // Append the price
        const price = document.createElement("h4");
        price.textContent = item.price;
        itemDiv.append(price);

        itemsContainer.append(itemDiv);
    });
    content.append(itemsContainer);
}
