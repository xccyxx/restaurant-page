export default function() {
    const content = document.querySelector("#content");

    // A list to contain div contents
    const contentItems = [
        { text: "Menu" },
        
    ]

    // Loop through the list items to render divs
    contentItems.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.text;
        content.append(div);
    });
}
