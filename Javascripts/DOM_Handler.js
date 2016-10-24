function createDOM (carInventory) {
  var carOutput = "";
  var carCard = document.getElementById("container");

  for (var i = 0; i < carInventory.length; i++) {
    if (i % 3 === 0) { 
      carOutput += `<div class= "rows">`;
    } 

    carOutput += `<div class="col-md-4" style="border: 6px ${carInventory[i].make}">
                  <h3>${carInventory[i].model}</h3>
                  <p>${carInventory[i].year}</p>
                  <p>${carInventory[i].price}</p>,
                  <p>${carInventory[i].available}</p>
                  <p>${carInventory[i].make}</p>
                  <p>${carInventory[i].available}</p>
                  <p class="descripton">${carInventory[i].description}</p></div>`;
    
    if ((i + 1) % 3 === 0) { 
      carOutput += `</div>`;
        }
      }

  carCard.innerHTML = carOutput;
 
  Inventory.activateEvents();
};

Inventory.loadCar(createDOM);
