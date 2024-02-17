// Menu button animation
const menuButton = document.querySelector('.AASUB_hamburger');
const navigation = document.querySelector('.AASUB_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('AASUB_is-active');
    navigation.classList.toggle('AASUB_is-active');
})