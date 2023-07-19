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
