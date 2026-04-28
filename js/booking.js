let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
} else {
    console.log("Nincs bejelentkezve");
}

const bookedDates = [
    "2026-04-01","2026-04-02","2026-04-03","2026-04-04","2026-04-05","2026-04-06","2026-04-07","2026-04-08","2026-04-09","2026-04-10","2026-04-11","2026-04-12","2026-04-13","2026-04-14","2026-04-15",
    "2026-04-16","2026-04-17","2026-04-18","2026-04-19","2026-04-20","2026-04-21","2026-04-22","2026-04-23","2026-04-24","2026-04-25","2026-04-26","2026-04-27","2026-04-28","2026-04-29","2026-04-30",
    "2026-05-04","2026-05-05","2026-05-06","2026-05-07","2026-05-08","2026-05-14","2026-05-15","2026-05-16","2026-05-17","2026-05-18","2026-05-24","2026-05-25","2026-05-26","2026-05-27","2026-05-28",
    "2026-05-29","2026-05-30",
];

function Calendar(config) {

    const daysTag = document.querySelector(config.days),
    currentDate = document.querySelector(config.currentDate),
    prevNextIcon = document.querySelectorAll(config.navButtons);

    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    const bookedDates = config.bookedDates;

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let today = new Date();
    let todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {

        let fullDate = `${currYear}-${String(currMonth+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`;

        let isPast = fullDate < todayStr;
        let isBooked = bookedDates.includes(fullDate);
        let statusClass = isPast ? "inactive" : (isBooked ? "booked" : "free");
        liTag += `<li class="${statusClass}" data-date="${fullDate}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }

        renderCalendar();
    });
});

let startDate = null;
let endDate = null;

function clearSelection() {
    daysTag.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
}

daysTag.addEventListener("click", (e) => {
    if (!e.target.matches("li.free")) return;

    let clickedDate = e.target.dataset.date;

    if (!startDate) {
        startDate = clickedDate;
        e.target.classList.add("selected");
        return;
    }

    if (!endDate) {
        endDate = clickedDate;

        if (endDate < startDate) {
            [startDate, endDate] = [endDate, startDate];
        }

        daysTag.querySelectorAll("li.free").forEach(li => {
            let d = li.dataset.date;
            if (d >= startDate && d <= endDate) {
                li.classList.add("selected");
            }
        });

        console.log("Foglalás:", startDate, "→", endDate);
        foglaltIdopont.idopontMentes(startDate, endDate);
        return;
    }
    startDate = clickedDate;
    endDate = null;
    clearSelection();
    e.target.classList.add("selected");
});
}

new Calendar({
    wrapper: "#elso_naptar",
    days: ".days",
    currentDate: ".current-date",
    navButtons: ".icons span",
    bookedDates: bookedDates
});

new Calendar({
    wrapper: "#masodik_naptar",
    days: ".days1",
    currentDate: ".current-date1",
    navButtons: ".icons1 span",
    bookedDates: bookedDates
});

let gomb = document.getElementById("gomb")
gomb.innerHTML = `<button id="rendeles" class="szovegszin" onclick="foglalas()">Időpont foglalás</button>`

function foglalas() {
    if(user){
        gomb.innerHTML =`<a href="index.html"><button id="rendeles" class="szovegszin" onclick="foglalas()">Időpont foglalás</button></a>`
    }
    else{
        gomb.innerHTML =`<button id="rendeles" class="szovegszin" onclick="foglalas()">Időpont foglalás</button>`
        showConfirm()
    }
}

const loginbtn = document.getElementById("loginbtn");
const confirmText = document.querySelectorAll("szoveg")
const confirmBox = document.getElementById("confirmBox")
const close = document.getElementById("close")

function showConfirm(szoveg) {
    return new Promise((resolve) => {
        confirmText.innerText = szoveg;
        confirmBox.style.display = "flex";

        loginbtn.onclick = () => {
            confirmBox.style.display = "none";
            resolve(true);
            let email = document.getElementById("Email").value
            let telephone = document.getElementById("Telephone").value
            console.log("Email: " + email)
            console.log("Telephone: " + telephone)
        };
        close.onclick = () => {
            confirmBox.style.display = "none";
            resolve(false)
        }
    });
}