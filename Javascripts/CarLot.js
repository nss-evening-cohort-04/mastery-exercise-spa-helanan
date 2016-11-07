//original javascript
var CarLot = (function(carModifier){ //carlot modifier

 console.log("carModifier", carModifier);

  carModifier.populatePage = function(cars){
    console.log("cars", cars);
    // do stuff
    var carsToPage = document.getElementById("car-loaded"); //gets element for card output
    textInputUpdater = document.getElementById("textInputUpdaterEl");//get text input area
    outPutString = "", //set output string to empty
    carDescription = "", //sets description string to empty
    carCardContainer = "", //Car card, set to empty
    carAvailable = "", //availability to empty
    counter = 1; //sets a counter element for each object to value of 1

    //Loop through inventory array and populate text to page
    for (var i=0; i<cars.length; i++) {//for loop increment by 1 through the length of the inventory array

      //availability function for cars
      if (cars[i].purchased === false) { //IF Else statement for availability if inventory has a method of purchased then not in stock
        carAvailable = "In Stock"; // if in stock set carAvailable to string of instick
         } else { 
            carAvailable = "Out of Stock"; //otherwise set car availabile to string of out of stock
        }
      //function 4: output to DOM, find selectors for each data key value and instert into string with divs
      
            outPutString += `<div class="col-md-4 carCard" id="carCard--${counter}" style="border:3px solid">` 
               outPutString += `<div class="row">`
                    outPutString += `<div class="container-fluid carContainer">`
                      outPutString += `<div id="carCardClass">`
                        outPutString += `<div class="panel-heading panel-custom" id="make">${cars[i].make} ${cars[i].model}</div>`
                          outPutString += `<div id="year">${cars[i].year}</div><hr>`
                              outPutString += `<div class="price"><em><b>Price</em>: $</b>${cars[i].price}</div>`
                                outPutString += `<div class="description"><b>Description:</b> ${cars[i].description}</div>`
                                  outPutString += `<div class="availability">${carAvailable}</div>`
                                  outPutString += `<div class="panel-footer panel-custom">`
                                  outPutString += `</div>`
                                outPutString += `</div>`
                              outPutString += `</div>`
                        outPutString += `</div>`
                      outPutString += `</div>`
      if ((i+1) % 3 === 0) {  //if divisible by 3 is false add a div to output string
                  outPutString += '</div>';
        //do i need an extra parantheses at end of function?

        carsToPage.innerHTML = outPutString;  //writes CarCards to the DOM
        counter ++;
      };
    }
    console.log("carsToPage", carsToPage);
  }   
  return carModifier;


})(CarLot || {}); //pass through CarLot

