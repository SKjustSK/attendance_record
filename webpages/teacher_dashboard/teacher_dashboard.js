// Menu button animation
const menuButton = document.querySelector('.TD_hamburger');
const navigation = document.querySelector('.TD_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('TD_is-active');
    navigation.classList.toggle('TD_is-active');
})