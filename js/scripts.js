$(document).ready(function() {
  let cardNumber = ["2","3","4","5","6","7","8","9","10","Jack", "Queen", "King", "Ace"];
  let cardType = ["hearts","clubs","spades","diamonds"];
  let emptyDeck = [];
  cardType.forEach(function(type){
    cardNumber.forEach(function(number){
      emptyDeck.push(number + " of " + type);
    });
  });
  console.log(emptyDeck);
  emptyDeck.forEach(function(cards){
    let list = document.createElement("li");
    list.innerText = cards;
    document.querySelector(".deckDisplay").appendChild(list);
  });
});