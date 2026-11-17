
// =================================
// SEMIWIKI - MAIN JAVASCRIPT
// =================================

// 1. Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// 2. Article Search
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const articleCards = document.querySelectorAll(".article-card");
const noResults = document.getElementById("noResults");

function searchArticles() {
    const keyword = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    articleCards.forEach(card => {
        const content = (
            card.innerText + " " +
            card.dataset.keywords
        ).toLowerCase();

        const matched = content.includes(keyword);

        card.style.display = matched ? "" : "none";

        if (matched) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
}

if (searchInput && searchButton) {
    searchButton.addEventListener("click", searchArticles);

    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchArticles();
        }
    });

    searchInput.addEventListener("input", searchArticles);
}

console.log("SemiWiki website loaded successfully!");
