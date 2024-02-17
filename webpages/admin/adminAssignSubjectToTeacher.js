// Menu button animation
const menuButton = document.querySelector('.ASTT_hamburger');
const navigation = document.querySelector('.ASTT_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('ASTT_is-active');
    navigation.classList.toggle('ASTT_is-active');
})