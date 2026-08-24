const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const links = navLinks.querySelectorAll("a");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("activate");

    if (navLinks.classList.contains("activate")) {
        menuBtn.innerHTML = "×";
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.innerHTML = "≡";
        menuBtn.setAttribute("aria-expanded", "false");
    }

});

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("activate");

        menuBtn.innerHTML = "≡";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});