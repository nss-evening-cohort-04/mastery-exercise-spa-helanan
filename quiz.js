var xhr = new XMLHttpRequest();
xhr.open('GET', "inventory.json", true);
xhr.send();
 
xhr.onreadystatechange = processRequest;
 
function processRequest(e) {
 if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response.ip);

  }
}

function populatePage (inventory) { 
var selectedCar = '';
      		for (var i=0; i<selectedCar.inventory.length; i++) {
      			//redo all of these to match
            selectedCar += '<div class="container">';
      			selectedCar += '<div class="inventory">';
            selectedCar += '<div class="col-sm-4">';
             selectedCar += '<div class="list-group">';
      			selectedCar += '<img src=" ' + selectedCar.inventory[i].make + '" ';
      			selectedCar += 'alt="' + selectedCar.inventory[i].model + '" />';
      			selectedCar += '<p><b>' + selectedCar.inventory[i].year + '</b><br>';
      			selectedCar += selectedCar.inventory[i].price + '</p>';
      			selectedCar += '</div>' + '<br>' + '</div>' + '<br>' + '<br>';
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

      		