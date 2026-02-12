const modal = document.getElementById("modal");
const modalVelemeny = document.getElementById("modalVelemeny");
const modalFelkeres = document.getElementById("modalFelkeres");
const modalKep = document.getElementById("modalKep");
const modalBezar = document.getElementById("modalBezar");

document.querySelectorAll(".megnyitGomb").forEach((gomb) => {
    gomb.addEventListener("click", () => {
        modalVelemeny.innerText = gomb.dataset.velemeny;
        modalFelkeres.innerText = gomb.dataset.felkeres;
        modalKep.src = gomb.dataset.kep;
        modal.style.display = "flex";
    });
});

modalBezar.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }


const modal1 = document.getElementById("modal1");
const modalNev = document.getElementById("modalNev");
const modalLeiras = document.getElementById("modalLeiras");
const modalKep1 = document.getElementById("modalKep1");
const modalBezar1 = document.getElementById("modalBezar1");

document.querySelectorAll(".modalKepTrigger").forEach((kep) => {
    kep.addEventListener("click", () => {
        modalNev.innerText = kep.dataset.nev;
        modalLeiras.innerText = kep.dataset.leiras;
        modalKep1.src = kep.dataset.kep;
        modal1.style.display = "flex";
    });
});

modalBezar1.onclick = () => modal1.style.display = "none";
modal1.onclick = (e) => { if (e.target === modal1) modal1.style.display = "none"; }
