var xhr = new XMLHttpRequest();

xhr.onload = function(cars) {
	// if (xhr.status === 200) {
responseObject = JSON.parse(xhr.responseText);

var newContent = '';
for (var i=0; i < responseObject.events.length; i++) {
			newContent += '<div class="container">';
      		newContent += '<div class="inventory">';
            newContent += '<div class="col-sm-4">';
            newContent += '<div class="list-group">';
            newContent += '<div class="panel panel-primary">';
            newContent += '<div class="panel-heading panel-custom">' + responseObject.inventory[i].year + ' ' + responseObject.inventory[i].model + '</div>';
      		newContent += '<img src=" "';
      		newContent += 'alt="' + responseObject.inventory[i].model + '" />';
    		newContent += '<p><b>' + responseObject.inventory[i].year + '</b><br>';
    		newContent += '<p><b>' + responseObject.inventory[i].description + '</b><br>';
      		newContent += responseObject.inventory[i].price + '</p>';
      		newContent += '</div>' + '<br>' + '</div>' + '<br>' + '</div>' + '<br>';
      	}
//Update the page with the new content
	document.getElementById('container').innerHTML = newContent;
	}
};

//event listeners
elSelectedCar.addEventListener('focus', function() {
	//method;
}, false);

xhr.open('GET', 'Javascripts/inventory.json', true);
xhr.send(null);


