// Nav items
const navProfile = document.querySelector("#nav-profile");
const cta = document.querySelector("#cta");
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

const formContainer = document.querySelector("#form-container");
const form = document.querySelector("#form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");

// Createa spinner inside element given as parameter
function loader(el) {
    el.innerHTML = "";
    let spinner = document.createElement("img");
    spinner.src = "./images/spinner.svg";
    el.appendChild(spinner);
}

// FORM
function getFormData() {
    return {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    loader(formContainer);
    const formData = getFormData();
    fetch("https://formspree.io/f/maylrvpa", {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            message: formData.message,
        })
    })
    .then(response => {
        if(response.ok) {
            formContainer.innerHTML = "Kiitos viestistä!";
        } else {
            formContainer.innerHTML = "Jokin meni vikaan. Päivitä sivu ja yritä uudelleen.";
        }
    })
    .catch(error => {
        console.log("ERROR", error);
        formContainer.innerHTML = "Jokin meni vikaan. Päivitä sivu ja yritä uudelleen.";
    });
});

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
cta.addEventListener("click", () => contactEl.scrollIntoView({behavior: "smooth", block: "start"}));