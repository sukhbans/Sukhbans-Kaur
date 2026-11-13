
/* =====================================
   PRINCE KOUNDAL - PORTFOLIO JAVASCRIPT
===================================== */

// 1. DYNAMIC FOOTER YEAR
const yearElement = document.querySelector("footer");

if (yearElement) {
    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Prince Koundal. Built with passion.`;
}


// 2. TYPING ANIMATION
const roles = [
    "Software Engineer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
    "Tech Innovator"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector("#typing");

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1400);
            return;
        }

    } else {
        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

if (typingElement) {
    typeEffect();
}


// 3. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    "section, .project, .skills span"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 4. ACTIVE NAVIGATION LINK
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }

    });
});


// 5. MOBILE MENU
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show-menu");

        menuButton.textContent =
            navigation.classList.contains("show-menu") ? "✕" : "☰";

    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("show-menu");
            menuButton.textContent = "☰";
        });
    });
}


// 6. CONSOLE MESSAGE
console.log(
    "%cWelcome to Prince Koundal's Portfolio!",
    "color: #d4af37; font-size: 18px; font-weight: bold;"
);

console.log("Building. Learning. Innovating.");
