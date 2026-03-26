//Bandi order.js-éhez a felhasználó választásait tárolja
const Tarolo = {
    mentes: function(id, nev) {
        const adat = {
            id: id,
            nev: nev
        };
        localStorage.setItem("valasztas", JSON.stringify(adat));
    },

    leker: function() {
        return JSON.parse(localStorage.getItem("valasztas"));
    }
};

//dani login.js-éhez felhasználók adatait tárolja
const userDB = {
    userMentes: function( name, email, pw, phone, address) {
        const adat = {
            id: id,
            name: name,
            email: email,
            pw: pw,
            phone: phone,
            address: address
        };
        id++
        localStorage.setItem("valasztas", JSON.stringify(adat));
    },

    leker: function() {
        return JSON.parse(localStorage.getItem("valasztas"));
    }
};

//Gergő booking.js-éhez a kiválasztott napok tárolásához
const foglaltIdopont = {
    idopontMentes: function(id, idopont) {
        const adat = {
            id: id,
            idopont: idopont
        };
        localStorage.setItem("valasztas", JSON.stringify(adat));
    },

    leker: function() {
        return JSON.parse(localStorage.getItem("valasztas"));
    }
};