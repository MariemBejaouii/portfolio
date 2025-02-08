// Sélection des éléments
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle du menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Changer l'icône en "X" lorsqu'on ouvre le menu
    if (navbar.classList.contains('active')) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
    }
});














/*---- scroll sections active link--*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a ')
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    })
}; /*--------------sticky navbar-----*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);