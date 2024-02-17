// Menu button animation
const menuButton = document.querySelector('.loginAdmin_hamburger');
const navigation = document.querySelector('.loginAdmin_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('loginAdmin_is-active');
    navigation.classList.toggle('loginAdmin_is-active');
});
