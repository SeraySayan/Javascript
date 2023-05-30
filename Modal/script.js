'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < document.querySelectorAll('.show-modal').length; i++) {
    document.querySelectorAll('.show-modal')[i].addEventListener('click', function () {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

document.querySelector('.close-modal').addEventListener('click', function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        model.classList.add('hidden');
        overlay.classList.add('hidden');
    }
});
overlay.addEventListener('click', function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
});
