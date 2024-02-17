// Menu button animation
const menuButton = document.querySelector('.SD_hamburger');
const navigation = document.querySelector('.SD_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('SD_is-active');
    navigation.classList.toggle('SD_is-active');
})