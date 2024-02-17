// Menu button animation
const menuButton = document.querySelector('.loginTeacher_hamburger');
const navigation = document.querySelector('.loginTeacher_navigation');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('loginTeacher_is-active');
    navigation.classList.toggle('loginTeacher_is-active');
});
