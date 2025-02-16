// This file is intentionally left blank.
// Add script to handle navbar size change on scroll and toggle menu
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollTop = document.getElementById("scroll-top");
    if (window.scrollY > 50) {
        header.classList.add("small-nav");
        scrollTop.classList.add("show");
    } else {
        header.classList.remove("small-nav");
        scrollTop.classList.remove("show");
    }
});

function toggleMenu() {
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("active");
}

// Typing effect
const typingText = [
    "Research Assistant",
    "Computer Engineer",
    "Software Developer",
];
let typingIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 2000;
const typingElement = document.querySelector(".typing-effect");

function type() {
    if (charIndex < typingText[typingIndex].length) {
        typingElement.textContent +=
            typingText[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[typingIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        typingIndex = (typingIndex + 1) % typingText.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (typingText.length) setTimeout(type, delayBetweenWords);
});

// Enlarge image on "View" button click
const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

viewButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const card = button.closest(".card");
        const imgSrc = card.querySelector("img").src;
        modalImage.src = imgSrc;
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
