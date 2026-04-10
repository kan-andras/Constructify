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
      } 
      else {
        nyil.src = "../images/Arrow_down.png";
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
            <button class="prob">
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