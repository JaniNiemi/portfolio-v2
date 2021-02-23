// Nav items
const navProfile = document.querySelector("#nav-profile");
const navMainProjects = document.querySelector("#nav-projects");
const navSideProjects = document.querySelector("#nav-side-projects");
const navContact = document.querySelector("#nav-contact");

const profileEl = document.querySelector("#profile");
const mainProjectsEl = document.querySelector("#main-projects");
const sideProjectsEl = document.querySelector("#side-projects");
const contactEl = document.querySelector("#contact");

navProfile.addEventListener("click", () => profileEl.scrollIntoView({behavior: "smooth", block: "start"}));
navMainProjects.addEventListener("click", () => mainProjectsEl.scrollIntoView({behavior: "smooth", block: "start"}));
navSideProjects.addEventListener("click", () => sideProjectsEl.scrollIntoView({behavior: "smooth", block: "start"}));
navContact.addEventListener("click", () => contactEl.scrollIntoView({behavior: "smooth", block: "start"}));