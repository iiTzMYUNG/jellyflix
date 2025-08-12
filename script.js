console.log("Netflix Theme Loaded");

// Example: Play backdrop on hover
document.addEventListener("mouseover", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        // Future: Trigger preview video
        card.style.border = "2px solid var(--accent-color)";
    }
});

document.addEventListener("mouseout", (e) => {
    let card = e.target.closest(".card");
    if (card) {
        card.style.border = "none";
    }
});
