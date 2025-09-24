let temppoint=8;
if(document.getElementById("pointsTag")!=null){
    document.getElementById("pointsTag").textContent=temppoint;
    console.log(temppoint);
}

class Account {
    constructor(name,pass,mail="N/A") {
        this.username = name;
        this.password = pass;
        this.email = mail;
        this.points = 0;
        temppoint=this.points;
    }
    checkPoints(check) { //Sees if the player's points are equal/greater than check, and returns true. false otherwise.
        if (check >= this.points) {
            return true;
        } else {
            return false;
        }
    }
}

if(document.getElementById("confirmInfo")!=null){
    const element = document.getElementById("confirmInfo");
    element.addEventListener("click", checkAccount);
    const element2 = document.getElementById("creationInfo");
}

function checkAccount(){
    var user= document.getElementById("username").value;
    var pass= document.getElementById("password").value;
    console.log(user);
    if (user=="" || pass==""){
        //element2.textContent="Account info invalid.";
        console.log("Account info invalid.");
    } else {
        const newAccount = new Account(user,pass);
        element2.textContent="Account created!";
        console.log("Account created!");
    }
}