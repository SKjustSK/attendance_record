const studentLoginBtns = document.querySelectorAll(".studentLoginBtn");
const teacherLoginBtns = document.querySelectorAll(".teacherLoginBtn");
const adminLoginBtns = document.querySelectorAll(".adminLoginBtn");

let studentLogin = document.querySelector("#studentLogin");
let teacherLogin = document.querySelector("#teacherLogin");
let adminLogin = document.querySelector("#adminLogin");


studentLoginBtns.forEach((studentLoginBtn) => {
    studentLoginBtn.addEventListener('click', () => {
        studentLogin.setAttribute('style', 'display: flex');
        teacherLogin.setAttribute('style', 'display: none');
        adminLogin.setAttribute('style', 'display: none');
    });
});

teacherLoginBtns.forEach((teacherLoginBtn) => {
    teacherLoginBtn.addEventListener('click', () => {
        studentLogin.setAttribute('style', 'display: none');
        teacherLogin.setAttribute('style', 'display: flex');
        adminLogin.setAttribute('style', 'display: none');
    });
});

adminLoginBtns.forEach((adminLoginBtn) => {
    adminLoginBtn.addEventListener('click', () => {
        studentLogin.setAttribute('style', 'display: none');
        teacherLogin.setAttribute('style', 'display: none');
        adminLogin.setAttribute('style', 'display: flex');
    });
});
