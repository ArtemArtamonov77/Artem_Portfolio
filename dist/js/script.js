/* Скрипт добавляет/удаляет класс активности меню */
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tools__ratings-counter'),
      lines = document.querySelectorAll('.tools__ratings-line span');
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});