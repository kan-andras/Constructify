let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
    document.getElementById('nav_regImg').href = "user-profile.html"
    document.getElementById('hamburger_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('nav_account').style.borderRadius = "8px"
    let vilagossotet = document.getElementById("nav_switch")
    if (vilagossotet !== true){
      document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
      document.getElementById('regImg').href = "user-profile.html"
      document.getElementById('nav_regImg').href = "user-profile.html"
      document.getElementById('hamburger_account').src = "images/userLoggedInPlaceholder.jpg"
    }
    if (user) {
      document.getElementById('nav_account').classList.add("loggedin");
    }

} else {
    console.log("Nincs bejelentkezve");
}


// RESET
localStorage.removeItem("adat");

const mainblock = document.getElementById("egesz");
const secondmain = document.getElementById("second");
const thirdmain = document.getElementById("third");
const fourthmain = document.getElementById("fourth");
const fifthmain = document.getElementById("fifth");

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

const textarea = document.getElementById("megjegyzes");
const nextbutton = document.getElementById("tovabbbutton");

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
fifthmain.style.display = "none";

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
function meretTorles() {
    let adat = JSON.parse(localStorage.getItem("adat")) || {};

    delete adat.szobameret;

    localStorage.setItem("adat", JSON.stringify(adat));

    console.log("Méret törölve:", adat);
}

numberButtons.forEach(gomb => {
    gomb.addEventListener("click", () => {
    slider.disabled = true;
        
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

            if (valasz && adat.név == "Épület") {
                valt2();
            } 
            else if (valasz && adat.név == "Munka") {
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
function valt4(){
    setTimeout(() =>{
      fourthmain.style.display = "none";
      fifthmain.style.display = "block";

      osszegzesMegjelenites();
    }, 2000);
}

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
        if (adat.név == "Épület") {
            valt2();
        } 
        else if (adat.név == "Munka") {
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

function countChar(val){
    var len = val.value.length;
    var max = 250;

    if (len >= max) {
        val.value = val.value.substring(0, max);
    }

    document.getElementById("charNum").innerText = max - len;
}
const szobameretek = document.querySelectorAll(".overlayforszoba");
szobameretek.forEach((kep) =>{
    kep.addEventListener("click", ()=>{
    mentes({
        szobameret: kep.id
    });
    setTimeout(async () => {
        let text = "Biztos vagy a döntésedben?";

        const valasz = await showConfirm(text);

        if (valasz) {
            valt4();
        } else {
            meretTorles();
            console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        }
    }, 3000);
    console.log("Módosított adat:", JSON.parse(localStorage.getItem("adat")));
    })
})




textarea.addEventListener("input", function(event) {
    const value = event.target.value.trim();
    if (value.length > 0) {
      nextbutton.classList.add("show");
    } 
    else {
      nextbutton.classList.remove("show");
    }
  });

textarea.addEventListener("change", function(event) {
    console.log("Végleges érték:", event.target.value);
    mentes({
        megjegyzes: event.target.value
    });
    console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
  });

function Nextform(){
    const szoveg = document.getElementById("megjegyzes").value;
    mentes({
        megjegyzes: szoveg
    });
    setTimeout(async () => {
        valt4();
    }, 3000);
    console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
}

function osszegzesMegjelenites() {
    const adat = JSON.parse(localStorage.getItem("adat")) || {};
    const liElemek = document.querySelectorAll("#osszegzesLista li");

    if (!adat) return;

    liElemek[0].textContent = `(1.) Munka végzés típusa: ${adat.név || "-"}`;
    liElemek[1].textContent = `(2.) Kiválasztott téma: ${adat.alt || "-"}`;
    liElemek[2].textContent = `(3.) Szoba száma: ${adat.szobák
        ? adat.szobák + " szobát választottál ki."
        : adat.slider
            ? adat.slider + " szobát választottál ki."
            : "-"
    }`;
    liElemek[3].textContent = `(4.) Szoba mérete (m^2): ${adat.szobameret 
    ? adat.szobameret + " négyzetméterű szobákat választottál."
    : "Megjegyzésben változtattál a szobák nagyságán!"}`;
    liElemek[4].textContent = `(5.) Építőanyag: ${adat.epitoanyag || "Nincs megjeleníthető adat!"}`;
    liElemek[5].textContent = `(6.) Megjegyzés: ${adat.megjegyzes || "Nem adott meg megjegyzést!"}`;
}

document.getElementById("elkuldes").addEventListener("click", () => {
    const adat = JSON.parse(localStorage.getItem("adat"));
    console.log("Elküldött adat:", adat);

    window.location.href = "booking.html";
});

window.onload = () => {
    const adat = JSON.parse(localStorage.getItem("adat"));
    console.log("Betöltött adat:", adat);
};

