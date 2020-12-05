//Turn burger menu into X when clicked.
const burgerContainer = document.querySelector('.nav-burger-selectable-container');
const spanNodelist = document.querySelectorAll('.nav-burger-container>span');
const navbar = document.querySelector('.nav-menu_container');
const blackBack = document.querySelector('.black-background');

burgerContainer.addEventListener('click', () => {
    spanNodelist.forEach(span => {
        span.classList.toggle('burger-clicked')
    });
    navbar.classList.toggle('nav-menu_container-clicked');
    blackBack.classList.toggle('opacityOn');
});

const header = document.querySelector('header');

header.addEventListener('mouseleave', () => {
    // console.log('mouseout')

    spanNodelist.forEach(span => {
        span.classList.remove('burger-clicked')
    });

    navbar.classList.remove('nav-menu_container-clicked');
    blackBack.classList.remove('opacityOn');
})





