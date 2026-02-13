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


const div = document.createElement("div");
  div.style.alignItems = "center";
  div.style.gap = "20px";
  div.style.marginTop = "2%";
  div.style.marginLeft = "13%"

const img = document.createElement("img");
  img.src = "/images/epuletekhaz.svg";
  img.alt = "Példa";
  img.width = 50;
  img.style.marginLeft = "1%";
  img.style.borderRadius = "10px";

const p = document.createElement("szoveg");
  p.textContent = "Ezt választottad ki:";
  p.style.color = "white";
  p.style.float = "left";


div.appendChild(p);
div.appendChild(img);


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
          // glow hozzáadása csak az aktuálishoz
          kepek[index].classList.add("glow");
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
          // glow hozzáadása csak az aktuálishoz
          jobbkepek[index].classList.add("glowtwo");
          segedsecond = true;
          mainblock.style.height = "1160px";
        });
      });
    }

    hazgomb.addEventListener("click", () =>{
      document.getElementById("hely").appendChild(div);
    });
}