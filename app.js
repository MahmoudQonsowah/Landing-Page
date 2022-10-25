/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
//Global Variables
const mybutton = document.getElementById('Btn');
const sectionsElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');

// Generate navbar from sections id names we got from the querySelectorAll
let navList = '';
function generateNavbar() {           // add html tags for list items
    sectionsElements.forEach((section) => {
        navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
    });
    navbarUl.innerHTML = navList;   // Add the tags to the innerhtml
}
generateNavbar();

// Add class 'active' to section when near top of viewport (Eye level )

function addActiveClass(section) {
    const id = section.getAttribute('id');   // get the id from the section

    // add the active class to the section
    document.querySelector(`#${id}`).classList.add('your-active-class');
}

// Removing the active class from the section

function removeActiveClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
}

// calcualting when the section is active

function makeActiveSection() {
    sectionsElements.forEach((section) => {

        let elementOffset = section.getBoundingClientRect();
        if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
            addActiveClass(section);
        } else {
            removeActiveClass(section);
        }
    });
}
// event listener to the dom itself so
document.addEventListener('scroll', makeActiveSection);
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;     // For Safari
    document.documentElement.scrollTop = 0;   // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);

let navbar = document.getElementById('navbar').querySelectorAll('li');

// itrate in li items list

navbar.forEach((item) => {
    item.addEventListener('click', function (e) {
        navbar.forEach((item) => {
            item.classList.remove('navbarclick');  // remove every navbarclick class added befoe in any list item
        });
        item.classList.add('navbarclick');      // add the class on the button
    });
});

