export default function() {
    const content = document.querySelector("#content");
    // A list to container divs
    const containersList = [ "header", "details" ];
    
    containersList.forEach(container => {
        const containerDiv = document.createElement("div");

        if (container === "header") {
            const header = document.createElement("h2");
            header.textContent = "Contact Us";
            containerDiv.append(header);
        }

        if (container === "details") {
            const contentLines = [
                "For any inquiries or reservations, feel free to reach out to us:", 
                "<strong>Phone:</strong> +1 (415) 555-1234",
                "<strong>Email:</strong> contact@oceanbreezesushi.com",
                "<strong>Address:</strong>",
                "Ocean Breeze Sushi",
                "123 Ocean Blvd,",
                "San Francisco, CA 94110,",
                "United States"
            ]
            const details = document.createElement("div");
            contentLines.forEach(contentLine => {
                const row = document.createElement("p");
                if (contentLine.startsWith("<strong>")) {
                    row.innerHTML = contentLine;
                } else {
                    row.textContent = contentLine;
                }
                details.append(row);
            })
            containerDiv.append(details);
        }
        content.append(containerDiv);
    })

}
