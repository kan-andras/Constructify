let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('input1').value = user.name
    document.getElementById('input4').value = user.email
    document.getElementById('input6').value = user.pw
} else {
    console.log("Nincs bejelentkezve");
}

function logOut(){
    localStorage.removeItem("loggedInUser");
    window.location.replace("register.html");
}
function accDel() {
    userDB.torol()
}





const users = userDB.leker(); 
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const userIndex = users.findIndex(user => user.id === loggedInUser.id);

function nevEdit(){
    let input1 = document.getElementById("input1").value;
    if(userIndex !== -1) {
    users[userIndex].name = input1;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
}
};
function lakcimEdit(){
    let input2 = document.getElementById('input2').value;
    if(userIndex !== -1) {
    users[userIndex].address = input2;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
}
};
function emailEdit(){
    let input4 = document.getElementById('input4').value;
    if(userIndex !== -1) {
    users[userIndex].email = input4;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
}
};
function telEdit(){
    let input5 = document.getElementById('input5').value;
    if(userIndex !== -1) {
    users[userIndex].phone = input5;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
}
};
function pwEdit(){
    let input6 = document.getElementById('input6').value;
    if(userIndex !== -1) {
    users[userIndex].pw = input6;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
}
};







const B = document.getElementById('valtment');
const A = document.getElementById('fioktorles');
const C = document.getElementById('kijel');
const D = document.getElementById('nevgomb');
const E = document.getElementById('lakcimgomb');
const F = document.getElementById('emailgomb');
const G = document.getElementById('jelszogomb');
const J = document.getElementById('telszamgomb');



const A2 = document.getElementById('felnevgomb');
const I  = document.getElementById('input1');
const I2 = document.getElementById('input2');
const I3 = document.getElementById('input3');
const I4 = document.getElementById('input4');
const I5 = document.getElementById('input5');
const I6 = document.getElementById('input6');

const H = document.getElementsByClassName('inputmezo');

function syncHeight(){
    const height2 = A2.offsetHeight;
    const height4 = I.offsetHeight;
    //const widthA2 = A2.offsetWidth;
    A.style.height = height2 + 'px';
    C.style.height = height2 + 'px';

    D.style.height = height2 + 'px';
    E.style.height = height2 + 'px';
    F.style.height = height2 + 'px';
    G.style.height = height2 + 'px';
    B.style.height = height2 + 'px';
    J.style.height = height2 + 'px';
    I.style.height = height2 -2 + 'px';
    I2.style.height = height2 -2 + 'px';
    I3.style.height = height2 -2 + 'px';
    I4.style.height = height2 -2 + 'px';
    I5.style.height = height2 -2 + 'px';
    I6.style.height = height2 -2 + 'px';
    
    /*
    H.style.height = height2 + 'px';
    .style.width = widthA2*2 + 'px';*/
    
}

syncHeight();
window.addEventListener('resize', syncHeight);
