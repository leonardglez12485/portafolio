//-------------------------------------------------
//=========== Toggle Icon Navbar =========
//-------------------------------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    //-------------------------------------------------
    //=========== Scroll Section Active Links =========
    //-------------------------------------------------

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let heigt = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if (top >= offset && top < offset + heigt) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //-------------------------------------------------
    //=========== Sticky Navbar =========
    //-------------------------------------------------
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //-------------------------------------------------
    //=========== Remove toggle icon and navbar when click navbar link(scroll) =========
    //-------------------------------------------------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//-------------------------------------------------
//=========== Scrol Reveal =========
//-------------------------------------------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-connect, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-connect h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-connect p, .about-conect', { origin: 'rigth' });

//-------------------------------------------------
//=========== Typed JS =========
//-------------------------------------------------

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: true
});