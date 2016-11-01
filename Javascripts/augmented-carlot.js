//any changes I want to make to the original (setters/getters)
CarLot = (function(carModifier) {

	console.log("augmented-carlot.js loaded");

	carModifier.clickedStyling = function(car, color) {
		car.style.borderWidth = "6px";
		car.style.backgroundColor = color;
		car.classList.add("active");
	}

	carModifier.resetValues = function() { //give carModifier function a resetvalue method and set it to an anonymous function
		var car = document.getElementsByClassName("carCardClass"); // set all car cards elements to a variable call car
		for (var k=0; k<car.length; k++) { //loop through again and set to variable of k to avoid confusion
			item=car[k]; //access sub k
			item.style.backgroundColor = "beige"; //set each items background color
			item.style.borderWidth = "3px"; //set each items style class to a borderwidth of 3
			item.classList.remove("active");//remove each items active class 
		}
	};

 return carModifier;  //return the modifier 


})(CarLot || {}); //load carlot


//oldcode
// 	newCarLot.getInventory = function() { //access newCarlot function and get its inventory value and set to an anonymous function
// 		return current_inventory; //return the current inventory when called
// 	};

// 	newCarLot.setInventory = function(inventory){ //acces newCarlot again and its setter of inventory and pass it through the inventory function
// 		current_inventory = inventory; //assign a value of inventory to current_inventory when called
// 	}