const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
    document.getElementById('nav_account').style.borderRadius = "8px"
} else {
    console.log("Nincs bejelentkezve");
}


function initModal(velemenyek) {
    const modal = document.getElementById("modal");
    const modalVelemeny = document.getElementById("modalVelemeny");
    const modalFelkeres = document.getElementById("modalFelkeres");
    const modalKep = document.getElementById("modalKep");
    const modalBezar = document.getElementById("modalBezar");

    document.querySelectorAll(".megnyitGomb").forEach(gomb => {
        gomb.addEventListener("click", () => {
            const adat = velemenyek[gomb.dataset.index];

            modalVelemeny.innerText = adat.velemeny;
            modalFelkeres.innerText = adat.felkeres;
            modalKep.src = adat.kep;

            modal.style.display = "flex";
        });
    });

    modalBezar.onclick = () => modal.style.display = "none";
    modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
}

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

fetch("js/content.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("velemenyresz");

    data.velemenyek.forEach((item, index) => {
      container.innerHTML += `
        <div class="velemenyek">
            <img src="images/profilkep${index+1}.png" class="profilkep">

            <div class="velemeny">
                <p class="szovegszin1">Vélemény:</p>
                <p class="szovegszin1">${item.velemeny}</p>

                <p class="szovegszin1">Felkérés:</p>
                <p class="szovegszin1">${item.felkeres}</p>

                <p class="szovegszin">Képek:</p>
                <img src="${item.kep}" class="projektkep">

                <button class="megnyitGomb" data-index="${index}">
                    Részletek
                </button>
            </div>
        </div>
      `;
    });

    initModal(data.velemenyek);
});

fetch("js/content.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("nagyprojekt");

    data.nagy_projektek.forEach(item => {
      container.innerHTML += `
        <div class="projektek">
            <p class="szovegszin">Felkérés:</p>
            <p class="projektsz">${item.felkeres}</p>
            <img src="${item.kep}" alt="termekkep" class="projektkep">
        </div>
      `;
    });
});
initMunkasModal()