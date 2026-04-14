let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
} else {
    console.log("Nincs bejelentkezve");
}


// RESET
localStorage.removeItem("adat");

const mainblock = document.getElementById("egesz");
const secondmain = document.getElementById("second");
const thirdmain = document.getElementById("third");
const fourthmain = document.getElementById("fourth");

const gombok = document.querySelectorAll(".buttons");
const jobbgombok = document.querySelectorAll(".rightbuttons");

const kepek = document.querySelectorAll(".image");
const jobbkepek = document.querySelectorAll(".rightimage");

const numberButtons = document.querySelectorAll(".numberbuttons");

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");


const confirmBox = document.getElementById("confirmBox");
const confirmText = document.getElementById("confirmText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showConfirm(szoveg) {
    return new Promise((resolve) => {
        confirmText.innerText = szoveg;
        confirmBox.style.display = "flex";

        yesBtn.onclick = () => {
            confirmBox.style.display = "none";
            resolve(true);
        };

        noBtn.onclick = () => {
            confirmBox.style.display = "none";
            resolve(false);
        };
    });
}


secondmain.style.display = "none";
thirdmain.style.display = "none";
fourthmain.style.display = "none";

function mentes(ujAdat) {
    const regi = JSON.parse(localStorage.getItem("adat")) || {};

    const uj = {
        ...regi,
        ...ujAdat
    };

    localStorage.setItem("adat", JSON.stringify(uj));
}


gombok.forEach((gomb, index) => {
    gomb.addEventListener("click", () => {

        kepek.forEach(kep => kep.classList.remove("glow"));
        jobbkepek.forEach(kep => kep.classList.remove("glowtwo"));

        kepek[index].classList.add("glow");
        let altSzoveg = kepek[index].alt;

        mentes({
            id: index,
            név: kepek[index].id,
            alt: altSzoveg
        });

        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        setTimeout(async () => {
            let text = "Biztos vagy a döntésedben?";

            const valasz = await showConfirm(text);

            if (valasz) {
                valt();
            } else {
                localStorage.removeItem("adat");
            }

        }, 2000);
    });
});


jobbgombok.forEach((gomb, index) => {
    gomb.addEventListener("click", () => {

        jobbkepek.forEach(kep => kep.classList.remove("glowtwo"));
        kepek.forEach(kep => kep.classList.remove("glow"));

        jobbkepek[index].classList.add("glowtwo");
        let altSzoveg = jobbkepek[index].alt;

        mentes({
            id: index,
            név: jobbkepek[index].id,
            alt: altSzoveg
        });

        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        setTimeout(async () => {
            let text = "Biztos vagy a döntésedben?";

            const valasz = await showConfirm(text);

            if (valasz) {
                valt();
            } else {
                localStorage.removeItem("adat");
            }

        }, 2000);
    });
});

function valt() {
    setTimeout(() => {
        mainblock.style.display = "none";
        secondmain.style.display = "block";
    }, 2000);
}

function szobakTorles() {
    let adat = JSON.parse(localStorage.getItem("adat")) || {};

    delete adat.szobák;

    localStorage.setItem("adat", JSON.stringify(adat));

    console.log("Szobák törölve:", adat);
}

numberButtons.forEach(gomb => {
    slider.disabled = true;
    gomb.addEventListener("click", () => {

        
        numberButtons.forEach(b => b.classList.remove("active"));
        gomb.classList.add("active");
        const szoba = gomb.dataset.szoba;


        mentes({
            szobák: szoba
        });
        const adat = JSON.parse(localStorage.getItem("adat"));
        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        setTimeout(async () => {
            let text = "Biztos vagy a döntésedben?";

            const valasz = await showConfirm(text);

            if (valasz && adat.név == "epulet") {
                valt2();
            } 
            else if (valasz && adat.név == "munka") {
                valt3();
            }
            else {
                szobakTorles();
                console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
            }

        }, 2000);
    });
    });

function valt2(){
    setTimeout(() =>{
      secondmain.style.display = "none";
      thirdmain.style.display = "block";
    }, 2000);
}

function valt3(){
    setTimeout(() =>{
      secondmain.style.display = "none";
      thirdmain.style.display = "none";
      fourthmain.style.display = "block";
    }, 2000);
}

slider.value = 0;
output.innerHTML = 0;
slider.oninput = function () {
    output.innerHTML = this.value; 
    mentes({
        slider: this.value
    });
    const adat = JSON.parse(localStorage.getItem("adat"));
    const gombok = document.querySelectorAll(".numberbuttons");
    gombok.forEach(gomb => {
        gomb.disabled = true;
    });
    setTimeout(() => {
        if (adat.név == "epulet") {
            valt2();
        } 
        else if (adat.név == "munka") {
            valt3();
        }
    }, 3000);
};

const epitoanyagkepek = document.querySelectorAll(".epitoanyagimages");

epitoanyagkepek.forEach((kep) => {
    kep.addEventListener("click", () => {

        mentes({
            epitoanyag: kep.id
        });
        setTimeout(async () => {
            let text = "Biztos vagy a döntésedben?";

            const valasz = await showConfirm(text);

            if (valasz) {
                valt3();
            } else {
                localStorage.removeItem("adat");
            }
        }, 3000);
        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
    });
});


window.onload = () => {
    const adat = JSON.parse(localStorage.getItem("adat"));
    console.log("Betöltött adat:", adat);
};

