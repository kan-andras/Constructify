window.addEventListener("DOMContentLoaded", () => {

  const mentett = localStorage.getItem("kivalasztottKep");

  if (mentett) {
    const hely = document.getElementById("hely");
    hely.innerHTML = "";

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "20px";
    div.style.marginTop = "2%";
    div.style.marginLeft = "13%";

    const p = document.createElement("p");
    p.textContent = "Ezt választottad:";
    p.style.color = "white";

    const img = document.createElement("img");
    img.src = kepek[index].src;
    img.width = 65;
    img.style.borderRadius = "10px";

    div.appendChild(p);
    div.appendChild(img);
    hely.appendChild(div);
  }

});

const mainblock = document.getElementById("main-con");

const hazgomb = document.getElementById("housebuild");
const ceggomb = document.getElementById("factorybuild");
const tombhazgomb = document.getElementById("arrayhousebuild");

const hazimg = document.getElementById("house");
const cegimg = document.getElementById("factory");
const tömbimg = document.getElementById("array");

const festesgomb = document.getElementById("paintwork");
const burkolasgomb = document.getElementById("poveringwork");
const tapetazasgomb = document.getElementById("wallpaperingwork");
const nyilaszarogomb = document.getElementById("shutterwork");
const gipszkartongomb = document.getElementById("plasterboardingwork");
const szerkezetgomb = document.getElementById("structurework");
const falakgomb = document.getElementById("wallbreakingwork");
const szigetelesgomb = document.getElementById("insulationwork");
const keritesgomb = document.getElementById("fencework");
const tetoszigetelesgomb = document.getElementById("roofinsulationwork");

const gombok = document.querySelectorAll(".buttons");
const jobbgombok = document.querySelectorAll(".rightbuttons");
const kepek = document.querySelectorAll(".image");
const jobbkepek = document.querySelectorAll(".rightimage");



var seged = false;
var segedsecond = false;


function megrendeles(){
    if (segedsecond){
      kepek.forEach(kep => kep.classList.remove("glow"));
    }
    else{
      gombok.forEach((gomb, index) => {
        gomb.addEventListener("click", () => {
          // glow levétele mindről
          kepek.forEach(kep => kep.classList.remove("glow"));
          jobbkepek.forEach(kep => kep.classList.remove("glowtwo"));

          localStorage.setItem("kivalasztottkep", JSON.stringify({
            kep: kepek[index].src,
            id: index
          }));

          // glow hozzáadása csak az aktuálishoz
          kepek[index].classList.add("glow");

          const hely = document.getElementById("hely");
          hely.innerHTML = "";

          const div = document.createElement("div");
          div.style.display = "flex";
          div.style.alignItems = "center";
          div.style.gap = "20px";
          div.style.marginTop = "2%";
          div.style.marginLeft = "13%";

          const p = document.createElement("p");
          p.textContent = "Ezt választottad:";
          p.style.color = "white";

          const img = document.createElement("img");
          img.src = kepek[index].src;
          img.width = 65;
          img.style.borderRadius = "10px";

          div.appendChild(p);
          div.appendChild(img);
          
          div.classList.add("kivalasztott");
          hely.appendChild(div);

          setTimeout(() => {
            div.classList.add("active");
          }, 10);

          seged = true;
          mainblock.style.height = "1160px";
        });
      });
    }


    if (seged){
      jobbkepek.forEach(kep => kep.classList.remove("glowtwo"));
    }
    else{
      jobbgombok.forEach((jobbgomb, index) => {
        jobbgomb.addEventListener("click", () => {
          // glow levétele mindről
          jobbkepek.forEach(kep => kep.classList.remove("glowtwo"));
          kepek.forEach(kep => kep.classList.remove("glow"));

          localStorage.setItem("kivalasztottkep", JSON.stringify({
            kep: jobbkepek[index].src,
            id: index
          }));

          // glow hozzáadása csak az aktuálishoz
          jobbkepek[index].classList.add("glowtwo");


          const hely = document.getElementById("hely");
          hely.innerHTML = "";

          const div = document.createElement("div");
          div.style.display = "flex";
          div.style.alignItems = "center";
          div.style.gap = "20px";
          div.style.marginTop = "2%";
          div.style.marginLeft = "13%";

          const p = document.createElement("p");
          p.textContent = "Ezt választottad:";
          p.style.color = "white";

          const img = document.createElement("img");
          img.src = jobbkepek[index].src;
          img.width = 55;
          img.style.borderRadius = "10px";

          div.appendChild(p);
          div.appendChild(img);

          div.classList.add("kivalasztott");
          hely.appendChild(div);

          setTimeout(() => {
            div.classList.add("active");
          }, 10);

          segedsecond = true;
          mainblock.style.height = "1160px";
        });
      });
    }

}

