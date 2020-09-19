//declaration of variables
var selection = document.getElementById("educationSelect");
var selected = document.getElementById("educationSelected");
var invalidInput = document.getElementById("invalidInput");
var defaultBlock = document.getElementById("defaultBlock");
var polyBlock = document.getElementById("polyBlock");
var undergradBlock = document.getElementById("undergradBlock");
var postgradBlock = document.getElementById("postgradBlock");

//function for form in home page, changes bottom text accordingly
function checkInput() {

    //if the "--Select Option--" was selected
    if(selection.value == "0"){
        invalidInput.innerText = "Invalid. Please select a valid option"
    }

    //if "Polytechnic Student" was selected
    else if (selection.value == "poly"){
        invalidInput.innerHTML = "&nbsp;";
        selected.innerHTML = "<h1>Selected: Polytechnic Student</h1>";
        defaultBlock.style.display = "none";
        polyBlock.style.display = "flex";
        undergradBlock.style.display = "none";
        postgradBlock.style.display = "none";
    }

    //if "Undergraduate" was selected
    else if (selection.value == "undergrad"){
        invalidInput.innerHTML = "&nbsp;";
        selected.innerHTML = "<h1>Selected: Undergraduate</h1>";
        defaultBlock.style.display = "none";
        polyBlock.style.display = "none";
        undergradBlock.style.display = "flex";
        postgradBlock.style.display = "none";
    }

    //if "Postgraduate" was selected
    else if (selection.value == "postgrad"){
        invalidInput.innerHTML = "&nbsp;"; 
        selected.innerHTML = "<h1>Selected: Postgraduate</h1>";
        defaultBlock.style.display = "none";
        polyBlock.style.display = "none";
        undergradBlock.style.display = "none";
        postgradBlock.style.display = "flex";
    }
}

//Without any selection, display default block
defaultBlock.style.display = "flex";
polyBlock.style.display = "none";
undergradBlock.style.display = "none";
postgradBlock.style.display = "none";

//running function checkInput when searchButton is clicked
document.getElementById("searchButton").addEventListener("click", checkInput);