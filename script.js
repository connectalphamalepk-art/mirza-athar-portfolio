// =========================================
// Alpha Assistant Portfolio
// Version 2.0
// =========================================

// Navbar shadow on scroll
emailjs.init("ZBrKnustdX6T4J9Pk");
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Smooth fade-in when page loads

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Active navigation link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Welcome Message

console.log("%cWelcome to Alpha Assistant Portfolio 🚀", "color:#18B8FF; font-size:16px; font-weight:bold;");// Contact Form Demo

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received. I will contact you soon.");

contactForm.reset();

});

}// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    emailjs.sendForm(
        "service_r191sxt",
        "template_2bjvj3i",
        this
    )

    .then(() => {

        alert("✅ Message sent successfully!");

        contactForm.reset();

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";

    })

    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.");

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";

    });

});