(function(CarLot{


CarLot.addEventListener("load", function () {
inventoryLoader.addEventListener("load", function () {s

            
var elSelectedCar = document.getElementById('inventoryDiv');
var elColorChange = document.getElementById('inventoryDiv');
var elTextInput = document.getElementById('nav');
var elSubmitBtn = document.getElementById('btn');

function changeBorder(increaseWidth) {
  //set the border width
  if (elSelectedCar.onclick = true) {
   elSelectedCar.style.borderWidth = "thick";
  elColorChange.style.backgroundColor = "red";
  } else {
  elSelectedCar.style.borderWidth = "width|initial";
  elColorChange.style.backgroundColor = "color|initial";
  }
}
  
 function checkUserInput() {
 var userInput = el.value;
 if (userInput.length < 1) {
 elMsg.className = 'selectedCar';
 elMsg.textContent = 'Search...';
 } else {
 elMsg.textContent = '';
    }
  }
 function bindUserInput() {
  el.Msg.ClassName = 'userType';
  el.Msg.innerHTML = 'userInput';
 }
 
 var el = document.getElementByID('UserInput');
 var elMsg = document.getElementById('user-input');
 
 el.addEventListeners('click', checkUserInput, false);
 el.addEventListeners('keydown', bindUserInput, false);
  
 
document.getElementById("inventoryDiv").addEventListener("keydown",function(e){
  var find = document.getElementsByClassName("inventoryData")[0];
            if(e.keyCode === 13){
                 find.lastChild.innerHTML= document.getElementById("search-input").value;
                 document.getElementById("inventoryDiv").value='';
                 document.getElementById("inventoryDiv").blur();
        
       return inventoryLoader;
        });
      });
     })(CarLot || {});