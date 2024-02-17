// Menu button animation
const menuButton = document.querySelector('.LAT_hamburger');
const navigation = document.querySelector('.LAT_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('LAT_is-active');
    navigation.classList.toggle('LAT_is-active');
})