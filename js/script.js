// Sélection des éléments
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle du menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});

/*---- scroll sections active link--*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a ");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
}; /*--------------sticky navbar-----*/
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);
/*-------scroll reveal---------------
 */

ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
    ".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*-------typed js---------------
 */
const typed = new Typed(".multiple-text", {
    strings: [
        "Software Engineer",
        "Fullstack Developper",
        "Frontend Developper",
        "Backend Developer",
    ],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
/*---send email---- */

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    btn.innerText = "Sending...";

    var params = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    console.log("Params envoyés :", params);

    const serviceID = "service_nna0nl5";
    const templateID = "template_dj2dm3e";

    emailjs
        .send(serviceID, templateID, params)
        .then(() => {
            btn.innerText = "Send Email";
            alert("Email sent successfully !!");
        })
        .catch((err) => {
            btn.innerText = "Send Email";
            console.error("Erreur:", err);
            alert("Failed to send. Please check the information and try again.");
        });
});