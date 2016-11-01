//Anything I want to do to my DOM, click events, class changes (using javascript to change css)
console.log("CarLot IIFE", Carlot);
console.log("CarLot Make", CarLot.getMake());
console.log("CarLot Model", CarLot.getModel());
console.log("CarLot Year", CarLot.getYear());
console.log("CarLot Description", CarLot.getDescription());














// var CarLot = function(){
// 	var make = "make";
// 	var model = "model";
// 	var price = "price";
// 	var description = "description";
// 	console.log("CarLot color: ", color);
	
// 	return {
		
// 	}

// };
// function loadInventory(){
// // 	v
// // 	console.log("carLot", CarLot);
// // 	console.log("carLot", carLot);
// // }

// // scopeStuff();
// // console.log("CarLot: ", CarLot);
// // //console.log("inside global", inside);

// // var global_base = 500;
// // function addNums (){
// //  global_base += 500;

// // }
// // addNums();
// // console.log("final: ", global_base)

// var iife_global_base = 300;
// (function (){
// 		var internal_base = 100;
// 		var internal_sum = iife_global_base + internal_base;
// 		console.log("sum", internal_sum);
// })();