// get match text element
let matchText = document.querySelector(".match-text");
// set value to not match and color red at the beginning
matchText.textContent = "* Passwords do not match";
matchText.style.color = "red";
// if any of the values gets updated 
// check for equality or emptiness
// update text/color based on result of check
function updateText(current, other) {
    if (current.value !== "" && other.value !=="" &&
        current.value === other.value) {
        matchText.textContent = "Passwords match";
        matchText.style.color = "green";
    }
    else {
        matchText.textContent = "* Passwords do not match";
        matchText.style.color = "red";    
    }
}

let passwdField = document.querySelector("#passwd");
let confirmPwdField = document.querySelector("#confirm-pwd");
passwdField.addEventListener("input", function (e) {
    updateText(this, confirmPwdField);
});

confirmPwdField.addEventListener("input", function (e) {
    updateText(this, passwdField);
});