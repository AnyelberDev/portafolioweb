document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu a");

    // Función para manejar el scroll
    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("slide-in");
            } else {
                section.classList.remove("slide-in");
            }
        });
    }

    // Agregar eventos de scroll
    window.addEventListener("scroll", handleScroll);

    // Función para manejar el desplazamiento suave y las animaciones
    function handleMenuScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        // Desplazarse a la sección objetivo
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajustar por la altura del menú
            behavior: "smooth"
        });
    }

    // Agregar eventos a los enlaces del menú
    menuLinks.forEach(link => {
        link.addEventListener("click", handleMenuScroll);
    });

    // Llamar a handleScroll al cargar la página para mostrar las secciones visibles
    handleScroll();
});
