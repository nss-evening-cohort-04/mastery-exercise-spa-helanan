console.log("Loader Page")
var CarLot = (function(carModifier) { //set our global variable of CarLot to an anonmyous function with a carModifier paremeter

    var inventory = []; //set a variable of inventory to an empty array

    carModifier.getInventory = function () { //get inventory from the modified car arry and set it to anonymous function, when called will return inventory
        return inventory;
    };

    carModifier.loadInventory = function () { //set car modifier when loaded with the inventory to my  function
        var inventoryLoader = new XMLHttpRequest(); //set inventoryLoader object to a new xhml request
        inventoryLoader.open('GET', 'Javascripts/inventory.json', true); //load and open inventory with the GET method and pull in our inventory.json
        inventoryLoader.send(); 
        inventoryLoader.addEventListener("load", function () { //add event listener to see when loaded and send a 
            var JSONParsed = JSON.parse(this.responseText); //set a variable of JSONParsed to the parsed json array of cars to the DOM
            console.log("JSONParsed", JSONParsed);
            inventory = JSONParsed.cars;  //sets the inventory variable to the parsed JSON car object
            console.log("data", inventory);
            CarLot.populatePage(inventory); //then  the inventory once loaded
        });
    };

    return carModifier;

})(CarLot || {});

CarLot.loadInventory();

