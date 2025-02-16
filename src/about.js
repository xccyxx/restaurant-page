export default function() {
    const content = document.querySelector("#content");
    // A list to section divs
    const sections = [ "header", "details" ];
    
    sections.forEach(section => {
        const sectionDiv = document.createElement("div");

        if (section === "header") {
            const header = document.createElement("h2");
            header.textContent = "Contact Us";
            sectionDiv.classList.add("header");
            sectionDiv.append(header);
        }

        if (section === "details") {
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
            sectionDiv.append(details);
        }
        content.append(sectionDiv);
    })

}
