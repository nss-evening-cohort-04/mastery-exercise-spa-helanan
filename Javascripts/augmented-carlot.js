//any changes I want to make to the original (setters/getters)
var CarLot = (function(carModifier) {

	carModifier.clickedStyling = function(car) {
		car.style.borderWidth = "6px";
		car.style.backgroundColor = color;
		car.classList.add("active");
	}

	carModifier.resetValues = function() { //give carModifier function a resetvalue method and set it to an anonymous function
		var cars = document.getElementsByClassName("carCardEvents"); // set all car cards elements to a variable call car
		for (var k=0; k<cars.length; k++) { //loop through again and set to variable of k to avoid confusion
			cars[k].style.backgroundColor = "beige"; //set each items background color
			cars[k].style.borderWidth = "3px"; //set each items style class to a borderwidth of 3
			cars[k].classList.remove("active");//remove each items active class 
		}
	};

 return carModifier;  //return the modifier 


})(CarLot || {}); //load carlot