/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Chris',
    hand: []
  },
  {
    name: 'Nick',
    hand: []
  },
  {
    name: 'Mikey',
    hand: []
  },
  {
    name: 'Adam',
    hand: []
  }
];

var cardData = [
  {
    rank: 'ace',
    value: 11
  },
  {
    rank: 'two',
    value: 2
  },
  {
    rank: 'three',
    value: 3
  },
  {
    rank: 'four',
    value: 4
  },
  {
    rank: 'five',
    value: 5
  },
  {
    rank: 'six',
    value: 6
  },
  {
    rank: 'seven',
    value: 7
  },
  {
    rank: 'eight',
    value: 8
  },
  {
    rank: 'nine',
    value: 9
  },
  {
    rank: 'ten',
    value: 10
  },
  {
    rank: 'jack',
    value: 10
  },
  {
    rank: 'queen',
    value: 10
  },
  {
    rank: 'king',
    value: 10
  }
];

var suits = [
  'hearts',
  'clubs',
  'spades',
  'diamonds'
];

var deck = [];
for (var i = 0; i < cardData.length; i++) {
  for (var x = 0; x < suits.length; x++) {
    var newCard = {};
    newCard.rank = cardData[i].rank;
    newCard.value = cardData[i].value;
    newCard.suit = suits[x];
    deck.push(newCard);
  }
}

var shuffledCards = _.shuffle(deck);

var cardCounter = 0;
for (i = 0; i < 2; i++) {
  for (x = 0; x < players.length; x++) {
    players[x].hand.push(shuffledCards[cardCounter]);
    cardCounter++;
    if (i === 1) { console.log('Player ' + [x + 1], players[x]); }
  }
}

for (i = 0; i < players.length; i++) {
  var combinedScore = 0;
  for (x = 0; x < players[i].hand.length; x++) {
    combinedScore += players[i].hand[x].value;
  }
  players[i].score = combinedScore;
}

var playerWithHighestScore = { score: 0 };
for (i = 0; i < players.length; i++) {
  if (players[i].score > playerWithHighestScore.score) {
    playerWithHighestScore = players[i];
  }
}
console.log('Player with highest score was ' + playerWithHighestScore.name + ' with ' + playerWithHighestScore.score + ' points!');
