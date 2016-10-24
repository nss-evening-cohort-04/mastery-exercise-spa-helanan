var Inventory = (function(previousInventory) {
	
	previousInventory.changeCard = function(makeCard) {
		var cards = previousInventory.loadCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("on");
		}
		card.classList.add("on");
	};

	previousInventory.innerHTML = function(makeCard) {
		var cards = previousInventory.loadCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("description");
		}
		makeCard.classList.add("description");
	};  

	return previousInventory;

})(Inventory);

