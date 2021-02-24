const inputPassword = document.getElementById('input-password');
const inputLabel = document.getElementById('password-label');

showPassword = () => {
    inputPassword.type === 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password'
}

showLabel = () => { inputLabel.style.opacity = 1 }
blurLabel = () => { inputLabel.style.opacity = 0 }