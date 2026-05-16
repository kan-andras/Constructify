const user = JSON.parse(localStorage.getItem("loggedInUser"));

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
      document.getElementById('hamburger_account').classList.add("loggedin");
    }

} else {
    console.log("Nincs bejelentkezve");
}  

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

fetch("js/content.json")
  .then(res => res.json())
  .then(data => {
    const gyik = data.gyik; 
    const keret = document.getElementById("keret");
    gyik.forEach(item => {
      keret.innerHTML += `
        <div class="kerdes">
            <button class="prob" onclick=lenyilas()>
                <p class="szoveg">${item.kerdes}</p>
                <img src="../images/Arrow_down.png" class="kep">
            </button>
            <div class="megold">
                <p class="szoveg">${item.valasz}</p>
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

