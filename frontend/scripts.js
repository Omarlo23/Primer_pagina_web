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

    const slider = document.querySelector(".Slider");
    const boton = document.querySelector(".SliderBt");

    if (slider && boton) {
        boton.addEventListener("click", () => {
            slider.scrollBy({
                left: slider.clientWidth,
                behavior: "smooth"
            });
        });
    }


function PrecioCompleto(pago, impuesto){
    resultado = pago + impuesto;
}

let resultado =PrecioCompleto(20.5,15.00);
console.log(resultado);