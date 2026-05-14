let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
} else {
    console.log("Nincs bejelentkezve");
}

const bookedDates = [
    { start: "2026-04-01", end: "2026-04-30" },
    { start: "2026-05-04", end: "2026-05-30" },
    { start: "2026-06-04", end: "2026-06-10" }
];

function foglaltnap(ranges) {
    let dates = [];

    ranges.forEach(r => {
        let start = new Date(r.start);
        let end = new Date(r.end);

        while (start <= end) {
            let y = start.getFullYear();
            let m = String(start.getMonth() + 1).padStart(2, "0");
            let d = String(start.getDate()).padStart(2, "0");
            dates.push(`${y}-${m}-${d}`);
            start.setDate(start.getDate() + 1);
        }
    });

    return dates;
}

const bookedranges = foglaltnap(bookedDates);

function Calendar(config) {

    const daysTag = document.querySelector(config.days),
    currentDate = document.querySelector(config.currentDate),
    prevNextIcon = document.querySelectorAll(config.navButtons);

    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    const bookedDates = config.bookedDates;

    function getDatesBetween(start, end) {
        let result = [];
        let s = new Date(start);
        let e = new Date(end);

        while (s <= e) {
            let y = s.getFullYear();
            let m = String(s.getMonth() + 1).padStart(2, "0");
            let d = String(s.getDate()).padStart(2, "0");
            result.push(`${y}-${m}-${d}`);
            s.setDate(s.getDate() + 1);
        }
        return result;
    }
    
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

        let selectedDays = getDatesBetween(startDate, endDate);
        selectedDays.forEach(day => {
            let li = daysTag.querySelector(`li[data-date="${day}"]`);
            if (li) li.classList.add("selected");
        });

        console.log("Foglalás:", selectedDays);
        foglaltIdopont.idopontMentes(selectedDays);
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
    bookedDates: bookedranges
});

new Calendar({
    wrapper: "#masodik_naptar",
    days: ".days1",
    currentDate: ".current-date1",
    navButtons: ".icons1 span",
    bookedDates: bookedranges
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
            localStorage.setItem("Email", email);
            localStorage.setItem("Phone", telephone);
            console.log("Email: " + email)
            console.log("Telephone: " + telephone)
        };
        close.onclick = () => {
            confirmBox.style.display = "none";
            resolve(false)
        }
    });
}