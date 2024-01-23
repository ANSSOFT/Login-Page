const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper_sign_in = document.querySelector('.form-wrapper sign-in');
const wrapper_sign_up = document.querySelector('.form-wrapper sign-up');

signUpBtnLink.addEventListener('click', () => {
    if(wrapper_sign_up.classList.contains('active'))
    {
        wrapper_sign_in.classList.toggle('active');
    } else {
        wrapper_sign_up.classList.toggle('active');
    }

});
