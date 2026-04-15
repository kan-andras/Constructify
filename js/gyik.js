function initGyik() {
  const prob = document.querySelectorAll(".prob");

  prob.forEach(problem => {
      const nyil = problem.querySelector(".kep");
      nyil.src = "../images/Arrow_down.png";
  });

  prob.forEach(problem => {
    problem.addEventListener("click", () => {
      const sz = problem.nextElementSibling;
      sz.classList.toggle("active");
      const nyil = problem.querySelector(".kep");
      if (sz.classList.contains("active")) {
        nyil.src = "../images/Arrow_up.png";
        sz.style.transition = "max-height 0.7s cubic-bezier(0.4, 0, 1, 1)";
      } 
      else {
        nyil.src = "../images/Arrow_down.png";
        sz.style.transition = "max-height 0.5s cubic-bezier(0.4, 0, 1, 1)";
      }
    });
  });
}

fetch("../content.json")
  .then(res => res.json())
  .then(data => {
    const gyik = data.gyik; 
    const keret = document.getElementById("keret");
    gyik.forEach(item => {
      keret.innerHTML += `
        <div class="kerdes">
            <button class="prob" onclick=lenyilas()>
                ${item.kerdes}
                <img src="../images/Arrow_down.png" class="kep">
            </button>
            <div class="megold">
                <p>${item.valasz}</p>
            </div>
        </div>
      `;
    });
    initGyik();
  });
  let lenyil = null
  function lenyilas(){  
    let valasz = document.getElementById("megold")
    let hely = 0
    lenyil = setInterval(frame,1)
    function frame(){
      if(hely = 30){
        clearInterval(lenyil)
      }
      else{
        valasz.style.top = hely + 'px'
      }
    }
  }