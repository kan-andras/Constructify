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
    userMentes: function(name, email, pw, phone = null, address = null) {

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        const adat = {
            id: newId,
            name: name,
            email: email,
            pw: pw,
            phone: phone,
            address: address
        };

        users.push(adat);
        localStorage.setItem("users", JSON.stringify(users));

        return adat;
    },

    leker: function() {
        return JSON.parse(localStorage.getItem("users")) || [];
    },

    userDBDEL: function() {
        localStorage.removeItem("users"); // csak a userdb-t törli
    },
    mindenTorol: function() {
        localStorage.clear() //MINDEN MEGLÉVŐ ADATOT TÖRÖL
    },
    torol: function(id) {
    let users = this.leker();
    users = users.filter(u => u.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
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