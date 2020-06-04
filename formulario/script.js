const form = document.getElementById('form');

const us = document.getElementById('us');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass_ = document.getElementById('pass_');

//error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(us.value, email.value, pass.value, pass_.value);
    if (us.value === '') {
        showError(us, 'Usuario es requerido');
    } else {
        showSuccess(us);
    }
    if (email.value === '') {
        showError(email, 'Email es requerido');
    } else {
        showSuccess(email);
    }
    if (pass.value === '') {
        showError(pass, 'Contraseña es requerido');
    } else {
        showSuccess(pass);
    }
    if (pass_.value === '') {
        showError(pass_, 'Confirmar contraseña es requerido');
    } else {
        if (pass_.value != pass.value) {
            showError(pass_, 'Las contraseñas deben ser iguales');
        } else {
            showSuccess(pass_);
        }
    }
})