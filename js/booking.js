const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
const bookedDates = [
    "2026-04-01","2026-04-02","2026-04-03","2026-04-04","2026-04-05","2026-04-06","2026-04-07","2026-04-08","2026-04-09","2026-04-10","2026-04-11","2026-04-12","2026-04-13","2026-04-14","2026-04-15",
    "2026-04-16","2026-04-17","2026-04-18","2026-04-19","2026-04-20","2026-04-21","2026-04-22","2026-04-23","2026-04-24","2026-04-25","2026-04-26","2026-04-27","2026-04-28","2026-04-29","2026-04-30",
    "2026-05-04","2026-05-05","2026-05-06","2026-05-07","2026-05-08","2026-05-14","2026-05-15","2026-05-16","2026-05-17","2026-05-18","2026-05-24","2026-05-25","2026-05-26","2026-05-27","2026-05-28",
    "2026-05-29","2026-05-30",
];

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
    document.querySelectorAll(".days li").forEach(li => li.classList.remove("selected"));
}

document.addEventListener("click", (e) => {
    if (!e.target.matches(".days li.free")) return;

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

        document.querySelectorAll(".days li.free").forEach(li => {
            let d = li.dataset.date;
            if (d >= startDate && d <= endDate) {
                li.classList.add("selected");
            }
        });

        console.log("Foglalás:", startDate, "→", endDate);
        return;
    }

    startDate = clickedDate;
    endDate = null;
    clearSelection();
    e.target.classList.add("selected");
});







const daysTag1 = document.querySelector(".days1"),
currentDate1 = document.querySelector(".current-date1"),
prevNextIcon1 = document.querySelectorAll(".icons1 span");

let date1 = new Date(),
currYear1 = date1.getFullYear(),
currMonth1 = date1.getMonth();

const bookedDates1 = [
    "2026-04-01","2026-04-02","2026-04-03","2026-04-04","2026-04-05","2026-04-06","2026-04-07","2026-04-08","2026-04-09","2026-04-10",
    "2026-04-11","2026-04-12","2026-04-13","2026-04-14","2026-04-15","2026-04-16","2026-04-17","2026-04-18","2026-04-19","2026-04-20",
    "2026-04-21","2026-04-22","2026-04-23","2026-04-24","2026-04-25","2026-04-26","2026-04-27","2026-04-28","2026-04-29","2026-04-30",
    "2026-05-04","2026-05-05","2026-05-06","2026-05-07","2026-05-08","2026-05-14","2026-05-15","2026-05-16","2026-05-17","2026-05-18",
    "2026-05-24","2026-05-25","2026-05-26","2026-05-27","2026-05-28","2026-05-29","2026-05-30"
];

const months1 = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const renderCalendar1 = () => {

    let firstDayofMonth1 = new Date(currYear1, currMonth1, 1).getDay(),
        lastDateofMonth1 = new Date(currYear1, currMonth1 + 1, 0).getDate(),
        lastDayofMonth1 = new Date(currYear1, currMonth1, lastDateofMonth1).getDay(),
        lastDateofLastMonth1 = new Date(currYear1, currMonth1, 0).getDate();

    let today1 = new Date();
    let todayStr1 = `${today1.getFullYear()}-${String(today1.getMonth()+1).padStart(2,"0")}-${String(today1.getDate()).padStart(2,"0")}`;

    let liTag1 = "";

    for (let i = firstDayofMonth1; i > 0; i--) {
        liTag1 += `<li class="inactive">${lastDateofLastMonth1 - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth1; i++) {

        let fullDate1 = `${currYear1}-${String(currMonth1+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`;

        let isPast1 = fullDate1 < todayStr1;
        let isBooked1 = bookedDates1.includes(fullDate1);

        let statusClass1 = isPast1 ? "inactive" : (isBooked1 ? "booked" : "free");

        liTag1 += `<li class="${statusClass1}" data-date="${fullDate1}">${i}</li>`;
    }

    for (let i = lastDayofMonth1; i < 6; i++) {
        liTag1 += `<li class="inactive">${i - lastDayofMonth1 + 1}</li>`;
    }

    currentDate1.innerText = `${months1[currMonth1]} ${currYear1}`;
    daysTag1.innerHTML = liTag1;
};

renderCalendar1();

prevNextIcon1.forEach(icon1 => {
    icon1.addEventListener("click", () => {
        currMonth1 = icon1.id === "prev1" ? currMonth1 - 1 : currMonth1 + 1;

        if(currMonth1 < 0 || currMonth1 > 11) {
            date1 = new Date(currYear1, currMonth1, new Date().getDate());
            currYear1 = date1.getFullYear();
            currMonth1 = date1.getMonth();
        } else {
            date1 = new Date();
        }

        renderCalendar1();
    });
});

let startDate1 = null;
let endDate1 = null;

function clearSelection1() {
    document.querySelectorAll(".days1 li").forEach(li => li.classList.remove("selected"));
}

document.addEventListener("click", (e) => {
    if (!e.target.matches(".days1 li.free")) return;

    let clickedDate1 = e.target.dataset.date;

    if (!startDate1) {
        startDate1 = clickedDate1;
        e.target.classList.add("selected");
        return;
    }

    if (!endDate1) {
        endDate1 = clickedDate1;

        if (endDate1 < startDate1) {
            [startDate1, endDate1] = [endDate1, startDate1];
        }

        document.querySelectorAll(".days1 li.free").forEach(li => {
            let d = li.dataset.date;
            if (d >= startDate1 && d <= endDate1) {
                li.classList.add("selected");
            }
        });

        console.log("Foglalás 2. naptár:", startDate1, "→", endDate1);
        return;
    }

    startDate1 = clickedDate1;
    endDate1 = null;
    clearSelection1();
    e.target.classList.add("selected");
});
