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
            const rows = [
                "For any inquiries or reservations, feel free to reach out to us:", 
                "Phone: +1 (415) 555-1234",
                "Email: contact@oceanbreezesushi.com",
                "Address:",
                "Ocean Breeze Sushi",
                "123 Ocean Blvd,",
                "San Francisco, CA 94110,",
                "United States"
            ]
            const details = document.createElement("div");
            rows.forEach(row => {
                details.append(row);
            })
            containerDiv.append(details);
        }
        content.append(containerDiv);
    })

}
