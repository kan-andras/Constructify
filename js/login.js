const container = document.getElementById('container');
const registerBtn = document.getElementById('regisztralokgomb');
const loginBtn = document.getElementById('log');
//userDB.mindenTorol()



document.addEventListener("DOMContentLoaded", () => {

    const registerBtn = document.getElementById('regisztralokgomb');

    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nev = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const jelszo = document.getElementById('regPw').value;
        const jelszoagain = document.getElementById('regPwAgain').value;
        

        let bool1 = false;
        let bool2 = false;
        let bool3 = false;
        let bool4 = false;
        let bool5 = false;

        const joHossz = jelszo.length > 8;
        const vanSzimbolum = /[!@#$%^&*]/.test(jelszo);

        if (nev !== "" && !/\d/.test(nev)) {
            bool1 = true;
        }

        if (email.includes("@") && email.includes(".")) {
            bool2 = true;
        }

        if (joHossz && vanSzimbolum) {
            bool3 = true;
        }

        if (jelszo === jelszoagain) {
            bool4 = true;
        }
        if (bool1 && bool2 && bool3 && bool4) {

            const users = userDB.leker();
            const letezik = users.some(user => user.email === email);

            if (letezik) {
                alert("Ilyen emaillel már van felhasználó!");

                document.getElementById('regName').value = "";
                document.getElementById('regEmail').value = "";
                document.getElementById('regPw').value = "";
                document.getElementById('regPwAgain').value = "";
                return;
            }
        
            bool5 = confirm("Minden adat oké, menthetjük?");
        }

        if (bool1 && bool2 && bool3 && bool4 && bool5) {

            const ujUser = userDB.userMentes(
                nev,
                email,
                jelszo,
                null,
                null
            );

            login()
            console.log("Új user:", ujUser);
            console.log("Összes user:", userDB.leker());

        } else {
            console.log("Validáció nem ok");
        }

    });


    const loginBtn = document.getElementById('log');

    loginBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginJelszo = document.getElementById('loginPw').value;

        const users =userDB.leker();

        const bejelentkezettUser = users.find(user => user.email === loginEmail && user.pw === loginJelszo);

        if (bejelentkezettUser) {
            console.log("Bejelentkeztél:", bejelentkezettUser.name);
            localStorage.setItem("loggedInUser", JSON.stringify(bejelentkezettUser));
            setTimeout(() => {
                console.log("Átirányítás a főoldalra...")
            }, 700);
            
            setTimeout(() => {
                window.location.replace("index.html");
            }, 2000);
            
        }else{
            console.log("wompwomp")
        }


    })
});

function register(){
    container.classList.add("active");
    
}
function login(){
    container.classList.remove("active");
}



