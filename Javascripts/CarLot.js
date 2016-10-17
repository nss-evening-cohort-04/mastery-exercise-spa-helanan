var CarLot = (function (inventoryData)) {

    function loadInventory (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.onload = function() {
      	if(inventoryLoader.status === 200) {
      		responseObject = JSON.parse(inventoryLoader.responseText);

      		//Build Up String with New content
      		var newContent = '';
      		for (var i = 0; i <responseObject.cars.length; i++) {
      			if(i%3 === 0){
      			newContent.innerHTML += `Make: “ “’ + cars[i].make`;  
				newContent.innerHTML += `Model: “ “’ + cars[i].model`;
				newContent.innerHTML += `Year: “ “’ + cars[i].year`;
				newContent.innerHTML += `Price: “ “’ + cars[i].price`;
				newContent.innerHTML += `cars[i].description`;
				newContent.innerHTML += `Availability: “ “’ + cars[i].checkAvailability()`;
      		
      	if((i+1)%3 === 0){
        inventoryString +=`</div>`;
        }
        }
    console.log(inventoryData);
    printTo.innerHTML =  newContent;  
  }
    }
      	};
      

inventoryLoader.open('GET', 'Javascripts/inventory.json', true);
inventoryLoader.send(null);
      }