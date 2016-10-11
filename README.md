# Single Page Applications Quiz

## Setup


When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github. -->

## Instructions

update the description 

availability of each car in inventory

### Behavior

1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.


2. Loop over your array of cars 
3. build up an HTML string to build a card for each car. 
4. Use Bootstrap to create rows. 
5. Each row should contain 3 columns. 
6. Make sure you have a parent element with a class of `container`. Hint: You must build up the entire string of columns/rows before injecting into the DOM. 
7. Use a counter variable to know when to close a row after three columns.

8. Put a text input field in the navigation bar.

9. Display all properties of the car in the DOM


11. When you click on one of the car elements, 
    a) change the width of the border to a higher value
    b) change the background color to any other color
    c) clear the value of the text input in the navbar
    d) put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).

# Starter Code

Please read, and feel free to use, the code below to get started.

##### inventory.json

```json
{
  "cars": [
    {
      "make": "Nissan",
      "model": "Rogue",
      "year": "2006",
      "price": "8999",
      "description": "This is an immaculate 2006 Nissan Rogue with only 25000 miles on it. Leather seats, power everything."
    }
  ]
}
```

##### quiz.js

```js
function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
```

##### CarLot.js

```js
var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {

      });
    }
  };

})();
```
