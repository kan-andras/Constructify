const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function registerbutton(){
    const nev = document.getElementById('neve');
    const email = document.getElementById('emailja');
    const jelszo = document.getElementById('jelszava');
    const jelszoagain = document.getElementById('jelszoujra');

}