function inventoryLoader(inventoryData) {
//adding text to container//
// var carCards = document.getElementById('inventoryDiv');
// var carText = carCards.firstChild.nodeValue;
// carText = carText.replace(inventoryData);
// carCards.firstChild.nodeValue = carText;
//end//

Insert.innerHTML += inventoryString;

inventoryLoader.addEvents();
  inventoryLoader.textInputEvents();
  };


  // Loop over the inventory and populate the page

var inventoryData = document.getElementById('inventoryDiv');
    for (var i = 0; i<cars.length; i++) {
              if(i%3 === 0){


inventory.innerHTML += `Make: “ “’ + ${cars[i].make}`;  
inventory.innerHTML += `Model: “ “’ + ${cars[i].model}`;
inventory.innerHTML += `Year: “ “’ + ${cars[i].year}`;
inventory.innerHTML += `Price: “ “’ + ${cars[i].price}`;
inventory.innerHTML += `${cars[i].description}`
inventory.innerHTML += `Availability: “ “’ + ${cars[i].checkAvailability()}`;
 if((i+1)%3 === 0){
        inventoryString +=`</div>`;
    };
console.log(inventoryData);
  printTo.innerHTML =  newInventory;  
  };


 newInventory.activateEvents();
  };
  
newInventory.inventoryLoader(inventoryData);
