const body = document.querySelector('body');
const buttonOrder = body.querySelector('.js-button-order');
const navOrder = body.querySelector('.js-nav-order');
const checklistOrders = body.querySelectorAll('.js-checklist-order');
const wordingOrder = body.querySelector('.js-wording-order');
const hiddenInput = body.querySelector('.js-input-hidden');
const rangeInput = body.querySelector('.js-input-range');
const numberOrder = body.querySelector('.js-number-order');
const burgerMenu = body.querySelector('.js-burger-header');
const navHeader = body.querySelector('.js-nav-header');

const removeNav = () => {
    buttonOrder.classList.remove('order__roster_active');
    navOrder.classList.remove('order__nav_active');
}

buttonOrder.addEventListener('click', (event) => {
    event.preventDefault();

    buttonOrder.classList.toggle('order__roster_active');
    navOrder.classList.toggle('order__nav_active');
})

checklistOrders.forEach(checklistOrder => {
    checklistOrder.addEventListener('click', (event) => {
        event.stopPropagation();

        wordingOrder.innerText = checklistOrder.innerText;
        hiddenInput.value = checklistOrder.dataset.value;
        removeNav()
    })
})

body.addEventListener('click', (event) => {
    if(event.target !== buttonOrder) {
        removeNav()
    }
})

body.addEventListener('keydown', (event) => {
    if(event.key === 'Tab' || event.key === 'Escape') {
        removeNav()
    }
})

rangeInput.oninput = () => {
    numberOrder.innerText = rangeInput.value
}

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger_active')
    navHeader.classList.toggle('header__nav_active')
    body.classList.toggle('body_lock')
})