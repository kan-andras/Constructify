const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

function registerbutton(){
    const nev = document.getElementById('neve');
    const email = document.getElementById('emailja');
    const jelszo = document.getElementById('jelszava');
    const jelszoagain = document.getElementById('jelszoujra');

    if (nev.contains(Number) && nev.contains(Symbol) && nev == ""){
        document.getElementById("wrongnev").innerText = "Helytelen név adatok!";
    }
    else{
        document.getElementById("wrongnev").innerText = "Helyes adatok!";
        document.getElementById("wrongnev").style.color = "green";
    }


    if(email.contains("@") && email.contains("gmail.com")){
        document.getElementById("wronemail").innerText = "Helyes adatok!";
        document.getElementById("wronemail").style.color = "green";
    }
    else{
        document.getElementById("wronemail").innerText = "Helytelen adatok!";
    }
}

function register(){
    container.classList.add("active");
    
}
function login(){
    container.classList.remove("active");
}



