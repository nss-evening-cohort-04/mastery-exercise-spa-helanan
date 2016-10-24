/**** FIRST IIFE ****/
var Iventory = (function() {
  // Private variable (array)
  var inventoryCarInventory = [];

  return {
    loadCar: function (callback) { 
     
      var inventoryCarLoader = new XMLHttpRequest();

      inventoryCarLoader.addEventListener("load", function () {

        var inventoryCarData = JSON.parse(this.responseText);
        inventoryCarInventory = inventoryCarData.cars;

        callback(inventoryCarInventory);

      });
      
      inventoryCarLoader.open("Get", "inventory.json");
      inventoryCarLoader.send();     
    }
  }
})();






