const toForms = document.querySelectorAll('.toForm');
const forms = document.querySelectorAll('.form');

toForms.forEach((toForm, index) => {
    const form = forms[index];
    toForm.addEventListener('click', () => {
        form.setAttribute('style', 'display: flex');
        // Hides all other pages except the selected page
        forms.forEach((form_hide) => {
            if (form_hide != form)
            {
                form_hide.setAttribute('style', 'display: none');
            }
        });
        /* To hide the nav bar  */
        menuButton.classList.toggle('is-active');
        navigation.classList.toggle('is-active');
    }); 
});