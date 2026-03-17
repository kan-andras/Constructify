function uzenetKuldes(){
    let veznev = document.getElementById("veznevinput").value
    let kernev = document.getElementById("kernevinput").value
    let email = document.getElementById("emailinput").value
    let lakcim = document.getElementById("lakciminput").value
    let uzenet = document.getElementById("uzenetinput").value
    console.log(veznev, kernev, email, lakcim)
    console.log(uzenet)
    let asd = Math.floor(Math.random() * 10000);
    alert(`Köszönjük, hogy üzent nekünk! Ügyfélszolgálatunk hamarosan válaszolni fog. Várható idő: ${asd} nap`)
}