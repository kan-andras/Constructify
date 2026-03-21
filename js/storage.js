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