const inputPassword = document.getElementById('input-password')

showPassword = () => {
    inputPassword.type === 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password'
}