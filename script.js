const passwordOne = document.querySelector("#pwd");
const passwordTwo = document.getElementById("confirm-pwd");
const passwordNotif = document.querySelector(".password-notif");
let passwordMatch;

addBlurEvent();

function validatePassword() {
    removeBlurEvent()
    
    if (passwordOne.value === "" && passwordTwo.value === "") {
        passwordMatch = undefined;
        addAttribute();
        removeAttribute();
    }
    else if (passwordOne.value === passwordTwo.value) {
        passwordMatch = true;
        addAttribute();
        removeAttribute();
    }
    else {
        passwordMatch = false;
        addAttribute();
        removeAttribute();
    } 

    addBlurEvent();
}

function addBlurEvent() {
    passwordOne.addEventListener("blur", validatePassword);
    passwordTwo.addEventListener("blur", validatePassword);
}

function removeBlurEvent() {
    passwordOne.removeEventListener("blur", validatePassword);
    passwordTwo.removeEventListener("blur", validatePassword);
}

function addAttribute() {
    if (passwordMatch === true) {
        passwordOne.setAttribute("class", "validInput");
        passwordTwo.setAttribute("class", "validInput");
    } else if (passwordMatch === false){
        passwordOne.setAttribute("class", "invalidInput");
        passwordTwo.setAttribute("class", "invalidInput");
        passwordNotif.classList.add("invalidInput");
    } else {
        passwordOne.setAttribute("class", "emptyInput");
        passwordTwo.setAttribute("class", "emptyInput");
    }
}

function removeAttribute() {
    if (passwordMatch === true) {
        passwordOne.classList.remove("invalidInput");
        passwordOne.classList.remove("invalidInput");
        passwordNotif.classList.remove("invalidInput");
    } else if ((passwordMatch === false)) {
        passwordOne.classList.remove("validInput");
        passwordOne.classList.remove("validInput");
    } else {
        passwordOne.classList.remove("emptyInput");
        passwordOne.classList.remove("emptyInput");
        passwordNotif.classList.remove("invalidInput");
    }
}



