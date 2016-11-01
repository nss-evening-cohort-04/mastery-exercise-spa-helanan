
var CarLot = (function(carModifier) { //set our global variable of CarLot to an anonmyous function with a carModifier paremeter
    console.log("loader.js loaded");

        var inventory = []; //set a variable of inventory to an empty array

        carModifier.getInventory = function () { //get inventory from the modified car arry and set it to anonymous function, when called will return inventory
            return inventory;
        };

        carModifier.loadInventory = function (callback) { //set car modifier when loaded with the inventory to my callback function
            var inventoryLoader = new XHMLHttpRequest(); //set inventoryLoader object to a new xhml request
            inventoryLoader.open("GET", "inventory.json"); //load and open inventory with the GET method and pull in our inventory.json
            inventoryLoader.send(); 
            inventoryLoader.addEventListener("load", function (callback) { //add event listener to see when loaded and send a callback
                var JSONParsed = JSON.parse(this.responseText); //set a variable of JSONParsed to the parsed json array of cars to the DOM
                inventory = JSONParsed.cars;  //sets the inventory variable to the parsed JSON car object
                callback(inventory); //then callback the inventory once loaded
            });
        };

        return carModifier;
    })(CarLot || {});

//Evan at Emma helped me with all of this and he is amazing, NSS makes great teachers!!