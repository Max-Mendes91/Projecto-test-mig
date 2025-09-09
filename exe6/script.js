const cardsData = [
    { title: "Research", description: "Do research", icon: "calendar.png" },
    { title: "Planning", description: "Plan your task", icon: "planner.png" },
    { title: "Execution", description: "Start doing the work", icon: "execute.png" }
];

const container = document.getElementById("card-container");
const template = document.getElementById("card-template");

cardsData.forEach(cardData => {
    // Clone the template content
    const clone = template.content.cloneNode(true);

    // Fill in the title
    clone.querySelector("h2").textContent = cardData.title;

    // Fill in the description
    clone.querySelector("p").textContent = cardData.description;

    // Fill in the icon
    clone.querySelector("img").src = cardData.icon;
    clone.querySelector("img").alt = cardData.title;

    // Append the cloned card into the container
    container.appendChild(clone);
});
