var user = {
    username:'',
    password:''
}
var usuarioCorreto = {
    username:'correto',
    senha:'1234'
}
let login = document.getElementById('login');
let username = document.getElementById('username');
let password = document.getElementById('password');

const handleChangeUsername = (event) => {user.username=event.target.value}
const handleChangePassword = (event) => {user.password =event.target.value}

login.addEventListener('click',clicou)
username.addEventListener('change',handleChangeUsername)
password.addEventListener('change',handleChangePassword)

function clicou () {
    alert(`o usuário que você digitou é ${user.username} e a senha é ${user.password}`)
}