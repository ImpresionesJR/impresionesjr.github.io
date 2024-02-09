window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var contactsSection = document.querySelector('.contacto');
    var contactsSectionPosition = contactsSection.offsetTop;

    if (scrollPosition > contactsSectionPosition) {
        document.querySelector('.whatsApp').classList.add('hidden');
    } else {
        document.querySelector('.whatsApp').classList.remove('hidden');
    }
});



const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }

});