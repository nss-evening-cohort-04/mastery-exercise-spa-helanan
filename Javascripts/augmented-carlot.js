
CarLot = (function(cars) {

carCardClass(){
	cardloaded = document.getElementsByClassName("carCardClass");
	carCardClass.clickedStyling = function(carCardClass) {
		carCardClass.style.borderWidth = "6px";
		carCardClass.style.backgroundColor = color;
		carCardClass.classList.add("active");
		console.log("carCardClass", carCardClass);
	}

	carModifier.resetValues = function() { //give carModifier function a resetvalue method and set it to an anonymous function
		var car = document.getElementsByClassName("carCardClass"); // set all car cards elements to a variable call car
		for (var k=0; k<carCardClass; k++) { //loop through again and set to variable of k to avoid confusion
			item=carCardClass[k]; //access sub k
			item.style.backgroundColor = "beige"; //set each items background color
			item.style.borderWidth = "3px"; //set each items style class to a borderwidth of 3
			item.classList.remove("active");//remove each items active class 
		}
	};

 return carModifier;  //return the modifier 


})(CarLot || {}); //load carlot