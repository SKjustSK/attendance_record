// Menu button animation
const menuButton = document.querySelector('.hamberger');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active');
    navigation.classList.toggle('is-active');
})