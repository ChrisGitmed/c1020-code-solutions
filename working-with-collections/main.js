/* global _ */
/* eslint-disable no-console */
// console.log('Lodash is loaded:', typeof _ !== 'undefined');

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

var ranks = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'jack',
  'queen',
  'king',
  'ace'
];

var suits = [
  'hearts',
  'clubs',
  'spades',
  'diamonds'
];

var deck = [];
for (var i = 0; i < ranks.length; i++) {
  for (var x = 0; x < suits.length; x++) {
    var newCard = {};
    newCard.rank = ranks[i];
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
  players[i].score = getPersonalScore(players[i].hand);
}

function getPersonalScore(hand) {
  var personalScore = 0;
  for (x = 0; x < hand.length; x++) {
    if (hand[x].rank === 'ace') {
      personalScore += 11;
    } else if (hand[x].rank === 'jack' || hand[x].rank === 'queen' || hand[x].rank === 'king') {
      personalScore += 10;
    } else { personalScore += hand[x].rank; }
  }
  return personalScore;
}

var playerWithHighestScore = { score: 0 };
for (i = 0; i < players.length; i++) {
  if (players[i].score > playerWithHighestScore.score) {
    playerWithHighestScore = players[i];
  }
}
console.log('Player with highest score was ' + playerWithHighestScore.name + ' with ' + playerWithHighestScore.score + ' points!');
console.log(playerWithHighestScore.name + '\'s hand: ', playerWithHighestScore.hand);
