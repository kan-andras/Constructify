const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

let userMap = new Map([["name", "John Doe"],[ "email", "johndoedoesthings@gmail.com"],[ "pw", "johndoeisthebest@1"]]);
userMap.forEach((value, key) => console.log(`${key} : ${value}`));

function login(){
    const logEmail = document.getElementById('loginEmail').value;
    const logPw = document.getElementById('loginPw').value;
    //logEmail
    //logPw
    let storedUn
    return new Promise((resolve, reject) => {
        if(userMap.has(logEmail)){
            storedUn = userMap.get(logEmail)
            resolve()
            console.log(storedUn)
        }else{
            reject()
        }
    })
    
    


}

function registerbutton() {
    const nev = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const jelszo = document.getElementById('regPw').value;
    const jelszoagain = document.getElementById('regPwAgain').value;
    
    var bool1 = false;
    var bool2 = false;
    var bool3 = false;
    var bool4 = false;
    var bool5 = false;
    const joHossz = jelszo.length > 8;
    const vanSzimbolum = /[!@#$%^&*]/.test(jelszo);

    if (nev === "" || /\d/.test(nev)) {
        document.getElementById("wrongnev").innerText = "Helytelen név adatok!";
    } else {
        document.getElementById("wrongnev").innerText = "Helyes adatok!";
        document.getElementById("wrongnev").style.color = "green";
        bool1 = true;
    }

    if (email.includes("@") && email.includes(".")) {
        document.getElementById("wrongemail").innerText = "Helyes adatok!";
        document.getElementById("wrongemail").style.color = "green";
        bool2 = true;
    } else {
        document.getElementById("wrongemail").innerText = "Helytelen email cím adatok!";
    }

    if (!joHossz) {
        document.getElementById("wrongpassword").innerText = "Nem elég hosszú a jelszó!";
    }
    else if (!vanSzimbolum){
        document.getElementById("wrongpassword").innerText = "Nincs benne szimbólum.";
    } else {
        document.getElementById("wrongpassword").innerText = "Helyes jelszó!";
        document.getElementById("wrongpassword").style.color = "green";
        bool3 = true;
    }

    if (jelszo !== jelszoagain) {
        document.getElementById("wrongpasswordagain").innerText = "Nem egyezik!";
    } else {
        document.getElementById("wrongpasswordagain").innerText = "Egyezik!";
        document.getElementById("wrongpasswordagain").style.color = "green";
        bool4 = true;
    }




    
    if(bool2 && email == userMap.get("email")){
        alert("Ilyen emailel már van felhasználó regisztrálva!")

        document.getElementById('neve').value = "";
        document.getElementById('emailja').value = null;
        document.getElementById('jelszava').value = null;
        document.getElementById('jelszavaujra').value = "";
    } else{
        if(bool1 && bool2 && bool3 && bool4){
            if (confirm("Minden adatot helyesen adtál meg. Folytatod ezekkel az adatokkal?")) {
            bool5 = true;
            } else {
            bool5 = false;
            }
        }
    }
    
   /* if (bool1 && bool2 && bool3 && bool4 && bool5){
       
    }*/
    


    if (bool1 && bool2 && bool3 && bool4 && bool5){
        
    }
}

function register(){
    container.classList.add("active");
    
}
function login(){
    container.classList.remove("active");
}



