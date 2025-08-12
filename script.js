console.log("Netflix Theme Loaded - Enhanced Hover");

// Add overlay play button on hover
document.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".card");
    if (card && !card.querySelector(".nf-hover-overlay")) {
        const overlay = document.createElement("div");
        overlay.classList.add("nf-hover-overlay");
        overlay.innerHTML = `<button class="nf-play-btn">▶ Play</button>`;
        card.appendChild(overlay);
    }
});

document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".card");
    if (card) {
        const overlay = card.querySelector(".nf-hover-overlay");
        if (overlay) overlay.remove();
    }
});
