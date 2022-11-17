// get match text element
let matchText = document.querySelector(".match-text");
// set value to not match and color red at the beginning
matchText.textContent = "* Passwords do not match";
matchText.style.color = "red";
// if any of the values gets updated 
// check for equality or emptiness
// update text/color based on result of check