var CarLot = (function(carModifier) { //set CarLot variable to a function of modify cars 

console.log("eventListeners.js loaded");

carModifier.activateEvents = function () { //set the modify car function with activated events to an empty function
    var carCardContainer = document.getElementsByClassName("carCardClass"); //get the carCard Element and set it to the carCard variable
    var card = null; //set each card to null

    for (var j=0; j<carCardContainer.length; j++) { //for each item in the active modifier loop through another array with a variable of j to avoid confusion
        carCardContainer[j].addEventListener("click", function(event) { //add event listener to each card element and its variable and pass through a function called event
            card = event.currentTarget; //set the null cards value to the event function and access thier target value
            carModifier.resetValues();
            carModifier.clickedStyling(card, "white");
            textInputUpdater.value = ""; //clear the input
            textInputUpdater.focus(); //put cursor in the text input
        });
console.log("Cards go here", carCardContainer[j]);//this conLogs all of the cards as they go through the loop
    } //end for loop 

    textInputUpdater.addEventListener("keyup", function (event){ //add a key listener to text input to listen for event function and call
        if(card === null) { //if card is equal to null
            alert("please select a car"); //alert user to make a choice
        }
    var keyboard = card.lastChild.previousSibling;
    if (event.which === 13) {
        textInputUpdater.value = ""; //if the enter button is pushed then set the text input objects value to empty
        carModifier.resetValues(); //and reset the classes on the modifier function
        textInputUpdater.blur(); //give the text input focus
        card = null; //set the card value back to null
        console.log(">>Enter pushed, text added, input cleared", textInputUpdater.value);
    } else {
        keyboard.innerHTML = textInputUpdater.value; //otherwise set the textinputupdate functions and values to the inner html text only
        console.log("updated description =", keyboard)
           }
        }); //END of text input event listeners
    }; //END of modify Cars active class event listener

    //if card is not selected then alert

    return carModifier; //return modified cars
})(CarLot || {}); //pass through carlot


//OLD CODE
            // CarLot.addEventListener("load", function() {
            //     inventoryLoader.addEventListener("load", function() {

            //         //var decs
            //         var elSelectedCar = document.getElementById('inventoryDiv'),
            //             elColorChange = document.getElementById('inventoryDiv'),
            //             elTextInput = document.getElementById('nav'),
            //             elSubmitBtn = document.getElementById('btn');

            //         function changeBorder(increaseWidth) {
            //             //set the border width
            //             if (elSelectedCar.onclick = true) {
            //                 elSelectedCar.style.borderWidth = "thick";
            //                 elColorChange.style.backgroundColor = "red";
            //             } else {
            //                 elSelectedCar.style.borderWidth = "width|initial";
            //                 elColorChange.style.backgroundColor = "color|initial";
            //             }
            //         }

            //         function checkUserInput() {
            //             var userInput = el.value;

            //             if (userInput.length < 1) {
            //                 elMsg.className = 'selectedCar';
            //                 elMsg.textContent = 'Search...';
            //             } else {
            //                 elMsg.textContent = '';
            //             }
            //         }

            //         function bindUserInput() {
            //             el.Msg.ClassName = 'userType';
            //             el.Msg.innerHTML = 'userInput';
            //         }

            //         var el = document.getElementByID('UserInput'),
            //             elMsg = document.getElementById('user-input');

            //         el.addEventListeners('click', checkUserInput, false);
            //         el.addEventListeners('keydown', bindUserInput, false);

            //         document.getElementById("inventoryDiv").addEventListener("keydown", function(e) {
            //             var find = document.getElementsByClassName("inventoryData")[0];

            //             if (e.keyCode === 13) {
            //                 find.lastChild.innerHTML = document.getElementById("search-input").value;
            //                 document.getElementById("inventoryDiv").value = '';
            //                 document.getElementById("inventoryDiv").blur();

            //                 return inventoryLoader;
            //             };
            //         });

            //     }); //inventoryLoader
            // });