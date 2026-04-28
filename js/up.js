let user = JSON.parse(localStorage.getItem("loggedInUser"));
console.log(userDB.leker())
if (user) {
    console.log(`Bejelentkezve: ${user.id}, ${user.name}, ${user.email},${user.pw},${user.phone},${user.address}`);
    document.getElementById('nav_account').src = "images/userLoggedInPlaceholder.jpg"
    document.getElementById('regImg').href = "user-profile.html"
    document.getElementById('nav_account').style.borderRadius = "8px"
    document.getElementById('input1').value = user.name
    document.getElementById('input4').value = user.email
    document.getElementById('input6').value = user.pw
    document.getElementById('input2').value = user.address
    document.getElementById('input5').value = user.phone
    
} else {
    console.log("Nincs bejelentkezve, hogy jutottál ide?"); 
}

const confirmBox = document.getElementById("confirmBox");
const confirmText = document.getElementById("confirmText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
yesBtn.style.background="darkred"
function showConfirm(szoveg) {
    
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("yesBtn").disabled = false
        yesBtn.style.background="red"
        yesBtn.addEventListener("mouseenter", (event) => { event.target.style.background="darkred"})
        yesBtn.addEventListener("mouseleave", (event) => { event.target.style.background="red"})
      } else {
        document.getElementById("countdown").innerHTML = timeleft ;
      }
      timeleft -= 1;
    }, 1000);


        
        
    
    return new Promise((resolve) => {
        confirmText.innerText = szoveg;
        confirmBox.style.display = "flex";
       
        yesBtn.onclick = () => {
            confirmBox.style.display = "none";
            resolve(true);
        };

        noBtn.onclick = () => {
            confirmBox.style.display = "none";
            resolve(false);
        };
    });
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

    setTimeout(async () => {
        let text = "Biztos vagy a döntésedben?";

        const valasz = await showConfirm(text);

        if (valasz) {
            userDB.torol(user.id);
            localStorage.removeItem("loggedInUser");
            window.location.replace("register.html");
        } else {
            confirmBox.style.display = "none";
        }

    }, 500);

    
}


const users = userDB.leker(); 
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const userIndex = users.findIndex(user => user.id === loggedInUser.id);


function saveAll() {
    
    function nevEdit(){
        let input1 = document.getElementById("input1").value;
        if(userIndex !== -1) {
            users[userIndex].name = input1;
            
        }
    };
    function lakcimEdit(){
        let input2 = document.getElementById('input2').value;
        if(userIndex !== -1) {
            users[userIndex].address = input2;
            
        }
    };
    function emailEdit(){
        let input4 = document.getElementById('input4').value;
        if(userIndex !== -1) {
            users[userIndex].email = input4;
            
        }
    };
    function telEdit(){
        let input5 = document.getElementById('input5').value;
        if(userIndex !== -1) {
            users[userIndex].phone = input5;
            
        }
    };
    function pwEdit(){
        let input6 = document.getElementById('input6').value;
        if(userIndex !== -1) {
            users[userIndex].pw = input6;
           
        }
    
        
    };
    
    
        
        
    

    nevEdit()
    lakcimEdit()
    emailEdit()
    telEdit()
    pwEdit()
    localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));
        console.log("User adatai frissítve!");
        console.log(users[userIndex])
}