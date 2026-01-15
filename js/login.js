const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

function register(){
    container.classList.add("active");
}
function login(){
    container.classList.remove("active");
}


function registerbutton(){
    container.classList.add("active");
    const nev = document.getElementById('neve');
    const email = document.getElementById('emailja');
    const jelszo = document.getElementById('jelszava');
    const jelszoagain = document.getElementById('jelszoujra');

    if (nev.contains(Number) && nev.contains(Symbol) && nev == ""){
        document.getElementById("wrongnev").innerText = "Helytelen név adatok!";
    }
    
}
