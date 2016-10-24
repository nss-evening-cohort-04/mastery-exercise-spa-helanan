
var Inventory = (function (previousInventory) {
  var containerEl = document.getElementById("container");
  var inputEl = document.getElementById("user-input");
  var buttonEl = document.getElementById("submit");

  previousInventory.loadCards = function () {
    var cards = document.getElementsByClassName("cards")
    return cards
  };

  previousInventory.activateEvents = function(event) {
    var cards = previousInventory.loadCards();

    for (var i = 0; i < cards.length; i++) {      
      console.log("makeCard", cards[i]);
      cards[i].addEventListener("click", function(event) {
        
        var card = event.currentTarget;
        previousInventory.changeCard(card);
        inputEl.focus();
        inputEl.value = "";
        previousInventory.infuseText(card);
      });
    }
        

    buttonEl.addEventListener("click", function(event) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("on");
      }
      
    });

    inputEl.addEventListener("keyup", function(event) {
      var inputText = event.target.value;
      var newDescription = document.getElementsByClassName("description");
      newDescription[0].childNodes[6].innerHTML = inputText;  
    });

  };

  return previousInventory;
  
})(Inventory);
