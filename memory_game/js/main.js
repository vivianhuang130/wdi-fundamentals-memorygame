// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

//#8
// var cards = ["queen", "queen", "king", "king"];
// var cardsInPlay = [];
// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

// if (cardsInPlay.length === 2) {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");

//   }
// }	


//9
// var cards = ['queen', 'queen', 'king', 'king'];
// var cardsInPlay = [];

// var checkForMatch = function(){
// 	if (cardsInPlay.length === 2) {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");

//   }
// }
// }
 

// var flipCard = function (cardId) {


//   console.log("User flipped " + cards[cardId]);


//   cardsInPlay.push(cards[cardId]);


//   if (cardsInPlay.length === 2) {

//     checkForMatch();
//   }
// };
// flipCard();
// flipCard(0);
// flipCard(2);


//#10
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];
var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    alert("Sorry, try again");
  }
};

var flipCard = function (cardId) {
 console.log("User flipped " + cards[cardId].card);
  cardsInPlay.push(cards[cardId].card);
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)


  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
};

// flipCard(0);
// flipCard(2);


//#11
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }

}

createBoard();





