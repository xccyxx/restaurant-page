export default function() {
    const content = document.querySelector("#content");
    // A list to section divs
    const sections = [ "title", "details" ];
    
    sections.forEach(section => {
        const sectionDiv = document.createElement("div");

        if (section === "title") {
            const title = document.createElement("h1");
            title.textContent = "Contact Us";
            sectionDiv.classList.add("title");
            sectionDiv.append(title);
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
