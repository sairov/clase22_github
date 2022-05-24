const username = document.getElementById('user');
const password = document.getElementById('password');
const btn = document.getElementById('userAccess');

const validarCampos = (user, pass) => {
    user.setCustomValidity('');
    pass.setCustomValidity('');

    if (user.value === '') {
        user.setCustomValidity('El campo de user no puede estar vacio');
    } else if (user.value.indexOf('@') == -1) {
        user.setCustomValidity('El campo de user debe contener al menos un @');
    } else if (pass.value === ''){
        pass.setCustomValidity('El campo de constraseña no puede estar vacio');
    } else {
        user.setCustomValidity('');
        pass.setCustomValidity('');
        console.log('El mensaje ha sido enviado');
    }
}

btn.addEventListener('click', (e) => {
        validarCampos(username, password);
});
