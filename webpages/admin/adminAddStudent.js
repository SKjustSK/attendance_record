// Menu button animation
const menuButton = document.querySelector('.AASTD_hamburger');
const navigation = document.querySelector('.AASTD_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('AASTD_is-active');
    navigation.classList.toggle('AASTD_is-active');
})