//original javascript
var CarLot = (function(carModifier){ //carlot modifier
console.log("CarLot.js loaded"); //console out to see if working

function populatePage(inventory) { //TOP LEVEL GLOBAL FUNCTION
  var carsToPage = document.getElementById("outputEl"); //Turned back from jquery to javascript, gets element for card output
  textInputUpdaterEl = document.getElementById("outputEl");//get text input area
    outPutString = "", //set output string to empty
    carDescription = "", //sets description string to empty
    carCardContainer = "", //Car car, set to empty
    carAvailable = "", //availability to empty
    counter = 1; //sets a counter element for each object to value of 1

    //Loop through inventory array and populate text to page
    for (var i=0; i<inventory.length; i++) {//for loop increment by 1 through the length of the inventory array

      //availability function for cars
      if (inventory[i].purchased === false) { //IF Else statement for availability if inventory has a method of purchased then not in stock
        carAvailable = "In Stock"; // if in stock set carAvailable to string of instick
      } else { 
        carAvailable = "Out of Stock"; //otherwise set car availabile to string of out of stock
      }
      //function 4: output to DOM, find selectors for each data key value and instert into string with divs
      outPutString += `<div class="col-md-4 carCardClass" id="carCard--${counter}" style="border:3px solid ${inventory[i].color}">
      <p>${inventory[i].make}</p>
      <p>${inventory[i].model}</p>
      <hr>
      <p>${inventory[i].year}</p>
      <p>${inventory[i].price}</p>
      <p>${inventory[i].description}</p>
      <p class="availability">${carAvailable}</p>
      </div>`;
      if ((i+1) % 3 === 0) {  //if divisible by 3 is false add a div to output string
        outPutString += `</div>`;
       //do i need an extra parantheses at end of function?

      carsToPage.innerHTML = outPutString;  //writes CarCards to the DOM
      counter ++;
      console.log("inventory[i].make, inventory[i].model"); //log out see results
      };
      
      CarLot.loadInventory(populatePage);  //load carlot function with a method of load inventory and pass through populate page

      return carModifier; //return the modifier 
      }
    }
})(CarLot || {}); //pass through CarLot






// var CarLot = (function loadInventory() {
//     var inventory = [];
//     var self = this;

//     var inventory = document.createElement('div');
//         inventory.make = 'make';
//         inventory.model = 'model';
//         inventory.addEventListener('mousedown', function(e) {return self.onMouseDown(e) }, false);
//         inventory.addEventListener('click', function() { return self.onInventoryClick() }, true);
//         this.inventory = inventory;

//         //initialize
//         this._init = function() {

//     return {
//         self.loadInventory: function(callback) {
//             var loadInventory = new XMLHttpRequest();
//             //console.log("inventoryLoader", inventoryLoader);
              
//               //add elements to the dom
//               self.addToDom(d);

//               self.containerElement = getElementById("container");
//               self.window.on('resize', self.resizeHandler).resize();

//               //hide loader and show grid
//               self.preloader.addClass('o');
//               window.setTimeout(function() {
//                 self.grid.addClass('loaded');
//               }, self.fadeOutMs);
//               });

// //prepare pop state to load medias
//               window.onpopstate = function(e) {
//                 if (e.state)
//                   self.loadMedia(e.state);
//               }

// //click on veil will close the current media
//             self.veil.on('click', function(e) {
//               e.preventDefault();
//               if (self.currentMedia)
//                 self.closeMedia(self.currentMedia);
//                   });

//             //hotkeys
//             document.addEventListener('keydown', function(event) {
//               switch (event.keyCode) {
//                 //esc
//                 case 27:
//                 //close the current media
//                 if (self.currentMedia != null)
//                   self.closeMedia(self.currentMedia);
//                 return false;
//               }
//             });
//           }

//           //load media.json
//           this.loadFeed = function(callback) {
//             callback(media);
//             //$.ajax({
//                   url: self.feedUrl, 
//                   type: 'GET',
//                   dataType: 'json',
//                   complete: function(xhr, textStatus) {

//                   },
//                   success: function(data, textStatus, xhr) {
//                     callback(data)
//                   },

//                   error: function(xhr, textStatus, errorThrown) {

//                   }
//             });
//           }
//             //add media elements to the DOM
//             this.addToDom = function(d) {
//               var htmlImage = <a href="#" class="cell image" data-id-media="{id-media}"><div class=detail"><div class="close"><span></span></div><div class="image-detail"></div><div class="tl"></div><div class ="b1"></div><div class"tr"></div></div><div class="info"><div class="w"><h2>{title}</h2></div></div><div class="image"><img src="{img-src}"></div></a>', nroMedia = d.media.length;
//               for each(d.media, function(i,v) {
//                 self.grid.append(htmlImage.replace("title", v.title.replace))
//               }
//             }

//               }
//             }
//             }
//             loadInventory.addEventListener("load", function() {

//             });
//         }
//     };

// })();