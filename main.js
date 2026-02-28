// Toggle Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll("#navLinks a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Active link on scroll (highlight current section)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


