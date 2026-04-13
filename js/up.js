let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
    document.getElementById('nav_account').style.borderRadius = "8px"
    document.getElementById('input1').value = user.name
    document.getElementById('input4').value = user.email
    document.getElementById('input6').value = user.pw
} else {
    console.log("Nincs bejelentkezve, hogy jutottál ide?"); 
}

function logOut(){
    localStorage.removeItem("loggedInUser");
    window.location.replace("register.html");
}
function accDel() {
    if (!user) {
        console.log("Nincs bejelentkezve user");
        return;
    }

    if (!confirm("Biztosan törölni akarod a fiókodat?")) {
        return;
    }

    userDB.torol(user.id);
    localStorage.removeItem("loggedInUser");
    window.location.replace("register.html");
}



const users = userDB.leker(); 
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const userIndex = users.findIndex(user => user.id === loggedInUser.id);

function nevEdit(){
    let input1 = document.getElementById("input1").value;
    inputLoad(input1)
};
function lakcimEdit(){
    let input2 = document.getElementById('input2').value;
    inputLoad(input2)
};
function emailEdit(){
    let input4 = document.getElementById('input4').value;
    inputLoad(input4)
};
function telEdit(){
    let input5 = document.getElementById('input5').value;
    inputLoad(input5)
};
function pwEdit(){
    let input6 = document.getElementById('input6').value;
    inputLoad(input6)
};

function inputLoad(inputNUM) {
    if(userIndex !== -1) {
    users[userIndex].pw = inputNUM;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
    console.log("User adatai frissítve!");
    console.log(users[userIndex])
    }
}





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
