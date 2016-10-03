function populatePage (inventory) { 
var selectedCar = '';
      		for (var i=0; i<selectedCar.inventory.length; i++) {
      			//redo all of these to match
      			selectedCar += '<div class="inventory">';
      			selectedCar += '<img src=" ' + selectedCar.inventory[i].make + '" ';
      			selectedCar += 'alt="' + selectedCar.inventory[i].model + '" />';
      			selectedCar += '<p><b>' + selectedCar.inventory[i].year + '</b><br>';
      			selectedCar += selectedCar.inventory[i].price + '</p>';
      			selectedCar += '</div>';
      		}
      		//REMEMBER TO USE BOOTSTRAP ELEMENTS
      		document.getElementById('content').innerHTML = newContent;
      	}
      });
    xhr.open('GET', 'inventory.json', true);
    xhr.send(null);
    }
  };

})();





// Now that the DOM is loaded, establish all the event listeners
needed CarLot.activateEvents(); } 

CarLot.loadInventory();


var CarLot = (function () {
  var inventory = [];

  return {
   

  function () {
      	if(xhr.status === 200) {
      		responseObject = JSON.parse(xhr.responseText);

      		