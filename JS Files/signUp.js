"use strict";
// Initializes the elements as variables
var inputChoice = document.getElementById("categoryChoice");
var resultChoice = document.getElementById("monthChoice");
var cost = document.getElementById("cost");
var payment = document.getElementById("paymentInfo")
//When 
//Runs the respective code depending on the value of categoryChoice
inputChoice.onchange = function(){
    switch(inputChoice.value){
        case("consultation"):
            //changes resultChoice to available options for consultations
            resultChoice.innerHTML = "<option value=\"aug\">August 2020</option>\n"+
                                    "<option value=\"sep\">September 2020</option>\n"+
                                    "<option value=\"nov\">November 2020</option>";
            //change cost
            cost.innerText = "Cost = $2";
            payment.disabled = false; 
        break;

        case("competition"):
            //changes resultChoice to available options for competition
            resultChoice.innerHTML="<option value=\"aug\" disabled>August 2020 --No Availble Vacancies--</option>\n"+
                                    "<option value=\"nov\">November 2020</option>\n"+
                                    "<option value=\"dec\">December 2020</option>";
            //change cost
            cost.innerText = "Cost = $70";
            payment.disabled = false; 
        break;

        case("course"):
            //changes resultChoice to available options for courses
            resultChoice.innerHTML="<option value=\"aug\" disabled>August 2020 --No Availble Vacancies--</option>\n"+
                                    "<option value=\"sep\" disabled>September 2020 --No Available Vacancies--</option>\n"+
                                    "<option value=\"dec\">December 2020</option>";
            //change cost
            cost.innerText = "Cost = $200";     
            payment.disabled = false; 
            break;

        case("scholarship"):
            //changes resultChoice to available options
            resultChoice.innerHTML="<option value=\"nil\">NIL, SG:AI Scholarship 2021</option>";
            //change cost
            cost.innerText = "There is no cost for registering for a scholarship. An email with the list of necessary documents we need will be sent to you."
            payment.disabled = true;
        break;
    }
}

