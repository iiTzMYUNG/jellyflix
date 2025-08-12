console.log("Netflix Theme Loaded - Enhanced Hover v2");

// Function to add the overlay
function addOverlay(cardElement) {
    // Check if an overlay already exists to prevent duplicates
    if (!cardElement.querySelector(".nf-hover-overlay")) {
        const overlay = document.createElement("div");
        overlay.classList.add("nf-hover-overlay");
        overlay.innerHTML = `<button class="nf-play-btn">▶ Play</button>`;
        cardElement.appendChild(overlay);

        // Optional: Add click listener for the play button
        const playButton = overlay.querySelector('.nf-play-btn');
        if (playButton) {
            playButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents the click from bubbling up to the card's default click action
                console.log('Play button clicked!');
                // To-Do: Add logic here to play the item.
                // This often involves finding the "data-id" attribute on the card and using Jellyfin's internal JS functions.
            });
        }
    }
}

// Function to remove the overlay
function removeOverlay(cardElement) {
    const overlay = cardElement.querySelector(".nf-hover-overlay");
    if (overlay) {
        overlay.remove();
    }
}

// Use event delegation on the document for better performance
document.addEventListener("mouseenter", (e) => {
    // Target the specific card element used in your CSS for consistency
    const card = e.target.closest(".homePageSection .itemsContainer .card");
    if (card) {
        addOverlay(card);
    }
}, true); // Use capture phase to handle events properly

document.addEventListener("mouseleave", (e) => {
    // Target the specific card element
    const card = e.target.closest(".homePageSection .itemsContainer .card");
    if (card) {
        removeOverlay(card);
    }
}, true); // Use capture phase
