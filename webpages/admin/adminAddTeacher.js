// Menu button animation
const menuButton = document.querySelector('.AATEA_hamburger');
const navigation = document.querySelector('.AATEA_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('AATEA_is-active');
    navigation.classList.toggle('AATEA_is-active');
})