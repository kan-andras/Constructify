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
    } else {
      nyil.src = "../images/Arrow_down.png";
    }
  });
});