//original javascript
var CarLot = (function(carModifier){ //carlot modifier

 // console.log("carModifier", carModifier);

  carModifier.populatePage = function(cars){
    var carsToPage = document.getElementById("car-loaded"); //gets element for card output
    textInputUpdater = document.getElementById("textInputUpdaterEl");//get text input area
    outPutString = ""; //set output string to empty
    carDescription = ""; //sets description string to empty
    carCardContainer = ""; //Car card, set to empty
    carAvailable = ""; //availability to empty

    for(var i=0; i<cars.length; i++) {//for loop increment by 1 through the length of the inventory array
      //availability function for cars
      if (cars[i].purchased === false) { //IF Else statement for availability if inventory has a method of purchased then not in stock
        carAvailable = "In Stock"; // if in stock set carAvailable to string of instick
      } else { 
        carAvailable = "Out of Stock"; //otherwise set car availabile to string of out of stock
      }
      //function 4: output to DOM, find selectors for each data key value and instert into string with divs
      
      outPutString += `<div class="col-md-4 carCard" id="carCard--${i}" style="border:3px solid">${cars[i].make} <br> ${cars[i].model} <br> ${cars[i].year} <br> ${cars[i].price} <br>${cars[i].description}<br>${carAvailable}</div>`
      outPutString += `</div>`
      carsToPage.innerHTML = outPutString;  //writes CarCards to the DOM
      CarLot.activateEvents();
    }
    // console.log("carsToPage", carsToPage);
  }   
  return carModifier;


})(CarLot || {}); //pass through CarLot

