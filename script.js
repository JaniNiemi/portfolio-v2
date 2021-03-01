// Nav items
const navProfile = document.querySelector("#nav-profile");
const navMainProjects = document.querySelector("#nav-projects");
const navSideProjects = document.querySelector("#nav-side-projects");
const navContact = document.querySelector("#nav-contact");
const menuToggleEl = document.querySelector("#menu-toggle");
const navBackdrop = document.querySelector("#backdrop");
const menuContainer = document.querySelector("#menu-container");

const profileEl = document.querySelector("#profile");
const mainProjectsEl = document.querySelector("#main-projects");
const sideProjectsEl = document.querySelector("#side-projects");
const contactEl = document.querySelector("#contact");

function menuToggle() {
    menuContainer.classList.toggle("open");
}



// Event listeners
document.querySelectorAll(".nav__item").forEach((item) => item.addEventListener("click", menuToggle));

navBackdrop.addEventListener("click", menuToggle)
menuToggleEl.addEventListener("click", menuToggle);
navProfile.addEventListener("click", () => profileEl.scrollIntoView({behavior: "smooth", block: "start"}));
navMainProjects.addEventListener("click", () => mainProjectsEl.scrollIntoView({behavior: "smooth", block: "start"}));
navSideProjects.addEventListener("click", () => sideProjectsEl.scrollIntoView({behavior: "smooth", block: "start"}));
navContact.addEventListener("click", () => contactEl.scrollIntoView({behavior: "smooth", block: "start"}));