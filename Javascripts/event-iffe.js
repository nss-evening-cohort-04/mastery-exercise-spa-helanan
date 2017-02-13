var CarLot = (function(carModifier) { //set CarLot variable to a function of modify cars 
    console.log("carModifier");
    carModifier.activateEvents = function (){
        console.log("hello");

        var cardCardEvents = null; //set each card to null     
        let carCardEvents = document.getElementsByClassName('carCardClass');
        console.log('carCardEvents', carCardEvents)
        for (var j=0; j<carCardEvents.length; j++) { //for each item in the active modifier loop through another array with a variable of j to avoid confusion
         // var carCardEvent = document.getElementsByClassName("carCard");
            carCardEvents[j].addEventListener("click", function(event) { //add event listener to each card element and its variable and pass through a function called event
                let card = event.target; //set the null cards value to the event function and access thier target value
                console.log("card", card);
             
                CarLot.resetValues();
                CarLot.clickedStyling(card);
                // textInputUpdater.value = ""; //clear the input
                // textInputUpdater.focus(); //put cursor in the text input
            });
        }


        //  textInputUpdater.addEventListener("keyup", function (event){ //add a key listener to text input to listen for event function and call
        //      if(carCard === null) { //if card is equal to null
        //         alert("please select a car"); //alert user to make a choice
        //     }
        // var keyboard = card.lastChild.previousSibling;
        //  if (event.which === 13) {
        //      textInputUpdater.value = ""; //if the enter button is pushed then set the text input objects value to empty
        //      carModifier.resetValues(); //and reset the classes on the modifier function
        //     textInputUpdater.blur(); //give the text input focus
        //        carCard = null; //set the card value back to null
            
        //   } else {
        //     keyboard.innerHTML = textInputUpdater.value; //otherwise set the textinputupdate functions and values to the inner html text only
        //        }
        //       }); //END of text input event listeners
    }; //END of modify Cars active class event listener
    


    return carModifier; //return modified cars

})(CarLot || {}); //pass through carlot

        