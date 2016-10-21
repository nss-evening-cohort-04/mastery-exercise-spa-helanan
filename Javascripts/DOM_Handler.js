var cars = (function(){

  
  function executeThisCodeIfXHRFails () {
    console.log("An error occurred while transferring");
    }

  function executeThisCodeWhenChunksArrive () {
    }
  var inventoryDiv = document.getElementById("container");

  function executeThisCodeAfterFileLoaded () {
    var data = JSON.parse(this.responseText);
    var inventoryData = "";
    var currentInventory;
    data.cars.reverse();

  for (var i = 0; i < data.cars.length; i++) {
      currentModel = data.cars[i].model;
      currentMake = data.cars[i].make;
      currentYear = data.cars[i].year;
      currentPrice = data.cars[i].price;
      currentDescription = data.cars[i].description;
        inventoryDetails += '<div class="container">';
        inventoryDetails += '<div class="inventory">';
        inventoryDetails += '<div class="col-sm-4">';
        inventoryDetails += '<div class="list-group">';
        inventoryDetails += '<div class="panel panel-primary">';
        // inventoryDetails += '<img src=" "';
      inventoryDetails += `<div id='${currentModel}'>`;
         inventoryDetails += `<div id='${currentMake}'>`;
         inventoryDetails += `<div id='${currentYear}'>`;
         inventoryDetails += `<div id='${currentPrice}'>`;
          inventoryDetails += `<div id='${currentDescription}'>`;
      inventoryDetails +=`</div> + </div> + </div> + </div> + </div>`;

   };

    inventoryDiv.innerHTML = inventoryDetails;
  }

   inventoryDiv.addEventListener("click",function(e){
    console.log("target",e.target);
    Car.removeInventory(e.target);
    Car.oldInventory(e.target);
    Car.removeEachInventory(e.target.id);

   });

  

  var myRequest = new XMLHttpRequest();


  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails)
  myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
  myRequest.open("GET", "inventory.json")
  myRequest.send();

  return {

    oldInventory : function(target){
      for(var i = 0; i < 5; i++){
        if (target.id ===( 'deleteBtn-${i}')){
          console.log(target.parentNode);
          target.parentNode.parentNode.removeChild(target.parentNode);
        }
      }
    }
  };

})();




