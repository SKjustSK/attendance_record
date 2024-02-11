// Menu button animation
const menuButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active');
    navigation.classList.toggle('is-active');
})