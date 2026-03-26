// RESET
localStorage.removeItem("adat");

const mainblock = document.getElementById("egesz");
const secondmain = document.getElementById("second");
const thirdmain = document.getElementById("third");

const gombok = document.querySelectorAll(".buttons");
const jobbgombok = document.querySelectorAll(".rightbuttons");

const kepek = document.querySelectorAll(".image");
const jobbkepek = document.querySelectorAll(".rightimage");

const numberButtons = document.querySelectorAll(".numberbuttons");

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");


secondmain.style.display = "none";
thirdmain.style.display = "none";

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

        mentes({
            id: index,
            név: kepek[index].id
        });

        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        setTimeout(() => {
            let text = "Biztos vagy a döntésedben?";
        if (confirm(text) == true) {
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


        mentes({
            id: index,
            név: jobbkepek[index].id
        });

        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        setTimeout(() => {
            let text2 = "Biztos vagy a döntésedben?";
        if (confirm(text2) == true) {
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

numberButtons.forEach(gomb => {
    gomb.addEventListener("click", () => {

        numberButtons.forEach(b => b.classList.remove("active"));
        gomb.classList.add("active");

        const szoba = gomb.dataset.szoba;


        mentes({
            szobák: szoba
        });

        console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));
        valt2();
    });
});

function valt2(){
    setTimeout(() =>{
      secondmain.style.display = "none";
      thirdmain.style.display = "block";
    }, 2000);
}


output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;

    
    mentes({
        slider: this.value
    });
};
console.log("Mentett adat:", JSON.parse(localStorage.getItem("adat")));

window.onload = () => {
    const adat = JSON.parse(localStorage.getItem("adat"));
    console.log("Betöltött adat:", adat);
};