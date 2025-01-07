const initializeHomeContent = () => {
    const content = document.querySelector("#content");

    // Intro part
    const introContainer = document.createElement("div");
    const intro = document.createElement("p");
    intro.textContent = "Welcome to Ocean Breeze Sushi, where we bring the finest sushi to your table with a perfect blend of tradition and innovation. Nestled in the heart of San Francisco, we pride ourselves on offering only the freshest ingredients, expertly prepared by our talented sushi chefs. Whether you're a sushi aficionado or trying it for the first time, our menu is designed to satisfy every craving. Join us for a culinary journey that promises delightful flavors, impeccable service, and a warm, welcoming atmosphere.";
    introContainer.append(intro);

    // Hours part
    const hoursInfoContainer = document.createElement("div");

    // Hours Info Title
    const hoursInfo = document.createElement("h3");
    hoursInfo.textContent = "Hours";
    hoursInfoContainer.append(hoursInfo);

    // Hours Info List
    const ul = document.createElement("ul"); 
    const liTextList = [
        "Monday - Thursday: 11:00 AM - 9:00 PM",
        "Friday - Saturday: 11:00 AM - 10:00 PM",
        "Sunday: Closed"
    ];

    liTextList.forEach(liText => {
        const li = document.createElement("li");
        li.textContent = liText;
        ul.append(li);
    })
    hoursInfoContainer.append(ul);

    // Location Part
    const addressContainer = document.createElement("div");

    const restaurantName = document.createElement("h4");
    restaurantName.textContent = "Ocean Breeze Sushi";

    const address = document.createElement("p");
    address.textContent = "123 Ocean Blvd,";

    const city = document.createElement("p");
    city.textContent = "San Francisco, CA 94110,";

    const country = document.createElement("p");
    country.textContent = "United States";

    addressContainer.append(restaurantName);
    addressContainer.append(address);
    addressContainer.append(city);
    addressContainer.append(country);


    // Append the sections
    content.append(introContainer);
    content.append(hoursInfoContainer);
    content.append(addressContainer);
}

export { initializeHomeContent };