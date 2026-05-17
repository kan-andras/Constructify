let user = JSON.parse(localStorage.getItem("loggedInUser"));
if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
    document.getElementById('nav_account').style.borderRadius = "8px"

    // Pre-populate contact form fields with logged-in user data
    document.getElementById('nevinput').value = user.name;
    document.getElementById('phoneinput').value = user.phone;
    document.getElementById('emailinput').value = user.email || '';
    document.getElementById('lakciminput').value = user.address || '';
} else {
    console.log("Nincs bejelentkezve, hogy jutottál ide?");
}

// Handle textarea helper bar
const uzenetInput = document.getElementById("uzenetinput");
const uzenetHelper = document.getElementById("uzenetHelper");
const charCount = document.getElementById("charCount");

uzenetInput.addEventListener('focus', function() {
    uzenetHelper.classList.add('active');
});

uzenetInput.addEventListener('input', function() {
    charCount.textContent = this.value.length;
});

uzenetInput.addEventListener('blur', function() {
    if (this.value === '') {
        uzenetHelper.classList.remove('active');
    }
});

function uzenetKuldes(){
    let nev = document.getElementById("nevinput").value
    let phone = document.getElementById("phoneinput").value
    let email = document.getElementById("emailinput").value
    let lakcim = document.getElementById("lakciminput").value
    let uzenet = document.getElementById("uzenetinput").value
    console.log(nev, phone, email, lakcim)
    console.log(uzenet)
    let randDay = Math.floor(Math.random() * 10000);
    alert(`Köszönjük, hogy üzent nekünk! Ügyfélszolgálatunk hamarosan válaszolni fog. Várható idő: ${randDay} nap`)

    //EMAILJS KÜLDÉS
    emailjs.send("service_s0zgg8t", "template_un73gfr", {

            nev: nev || "-",
            phone: phone || "-",
            email: email || "-",
            lakcim: lakcim || "-",
            uzenet: uzenet || "-",
        })
        .then(() => {
            console.log("Sikeresen elküldve!");
        })
        .catch((error) => {
            console.error(error);
            console.log("Hiba történt!");
        });

        console.log("Elküldött adat:", adat);
}
