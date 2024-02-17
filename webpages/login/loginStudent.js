// Menu button animation
const menuButton = document.querySelector('.loginStudent_hamburger');
const navigation = document.querySelector('.loginStudent_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('loginStudent_is-active');
    navigation.classList.toggle('loginStudent_is-active');
});
