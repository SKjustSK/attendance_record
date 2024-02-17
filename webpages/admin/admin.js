// Menu button animation
const menuButton = document.querySelector('.A_hamburger');
const navigation = document.querySelector('.A_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('A_is-active');
    navigation.classList.toggle('A_is-active');
})