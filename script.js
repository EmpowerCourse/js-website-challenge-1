const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    if (navMenu.style.display !== "flex") {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
});