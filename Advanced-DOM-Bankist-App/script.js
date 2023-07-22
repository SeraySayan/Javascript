'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/*
// Select, Insert, Create, Delete
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
    'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);
const msgBtn = document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove();
});
*/
// Smooth Scrolling
const scrollToBtn = document.querySelector('.btn--scroll-to');
const sectionFeatures = document.querySelector('#section--1');
scrollToBtn.addEventListener('click', function () {
    sectionFeatures.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//     alert('great');
// });

// Page Navigation
//FIRST SOLUTION
// document.querySelectorAll('.nav__link').forEach((element) => {
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
// });

//SECOND SOLUTION (EVENT DELEGATION ONE PARENT ELEMENT FOR THE SAME EVENT HANDLER)
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    if (!clicked) return;
    tabs.forEach((el) => {
        el.classList.remove('operations__tab--active');
    });
    clicked.classList.add('operations__tab--active');
    tabsContent.forEach((tab) => {
        tab.classList.remove('operations__content--active');
    });
    document
        .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
        .classList.add('operations__content--active');
});

// Menu fade animation (passing argument into event handler)
const handleEvent = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
};
const navBar = document.querySelector('.nav');
navBar.addEventListener('mouseover', handleEvent.bind(0.5));
navBar.addEventListener('mouseout', handleEvent.bind(1));

//Sticky Navigation
const section1 = document.querySelector('#section--1');
const initialsCords = section1.getBoundingClientRect();
console.log(initialsCords);
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > initialsCords.top) {
        navBar.classList.add('sticky');
    } else navBar.classList.remove('sticky');
});
