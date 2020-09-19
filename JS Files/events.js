"use strict"

var event = document.getElementById("eventSelect");
var time = document.getElementById("timeSelect");

var competition = document.getElementsByClassName("competition");
var courses = document.getElementsByClassName("courses");
var consultation = document.getElementsByClassName("consultation");
var thisMonth = document.getElementsByClassName("thisMonth");
var nextMonth = document.getElementsByClassName("nextMonth");
var anytime = document.getElementsByClassName("anytime");


    function filterEvents(){
    competition.style.display = "block";
    courses.style.display = "block";
    consultation.style.display = "block";
    thisMonth.style.display = "block";
    nextMonth.style.display = "block";
    switch(event.value){
        case("competition"):
            competition.style.display = "block";
        break;

    }
    switch(time.value){
        case(thisMonth):
        anytime.style.display = "none";
        nextMonth.style.display = "none";
        thisMonth.style.display = "block";
        break;


    }
}


document.getElementById("filterButton").addEventListener("click", filterEvents);