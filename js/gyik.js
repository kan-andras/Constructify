const prob = document.querySelectorAll(".prob");
 
prob.forEach(problem => {
  problem.addEventListener("click", () => {
    const sz = problem.nextElementSibling;
    sz.classList.toggle("active");
  });
});