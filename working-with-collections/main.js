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

var cards = [
  {
    rank: 'ace',
    suit: 'clubs',
    value: 11
  },
  {
    rank: '2',
    suit: 'clubs',
    value: 2
  },
  {
    rank: '3',
    suit: 'clubs',
    value: 3
  },
  {
    rank: '4',
    suit: 'clubs',
    value: 4
  },
  {
    rank: '5',
    suit: 'clubs',
    value: 5
  },
  {
    rank: '6',
    suit: 'clubs',
    value: 6
  },
  {
    rank: '7',
    suit: 'clubs',
    value: 7
  },
  {
    rank: '8',
    suit: 'clubs',
    value: 8
  },
  {
    rank: '9',
    suit: 'clubs',
    value: 9
  },
  {
    rank: '10',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'jack',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'queen',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'king',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'ace',
    suit: 'diamonds',
    value: 11
  },
  {
    rank: '2',
    suit: 'diamonds',
    value: 2
  },
  {
    rank: '3',
    suit: 'diamonds',
    value: 3
  },
  {
    rank: '4',
    suit: 'diamonds',
    value: 4
  },
  {
    rank: '5',
    suit: 'diamonds',
    value: 5
  },
  {
    rank: '6',
    suit: 'diamonds',
    value: 6
  },
  {
    rank: '7',
    suit: 'diamonds',
    value: 7
  },
  {
    rank: '8',
    suit: 'diamonds',
    value: 8
  },
  {
    rank: '9',
    suit: 'diamonds',
    value: 9
  },
  {
    rank: '10',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'jack',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'king',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'ace',
    suit: 'hearts',
    value: 11
  },
  {
    rank: '2',
    suit: 'hearts',
    value: 2
  },
  {
    rank: '3',
    suit: 'hearts',
    value: 3
  },
  {
    rank: '4',
    suit: 'hearts',
    value: 4
  },
  {
    rank: '5',
    suit: 'hearts',
    value: 5
  },
  {
    rank: '6',
    suit: 'hearts',
    value: 6
  },
  {
    rank: '7',
    suit: 'hearts',
    value: 7
  },
  {
    rank: '8',
    suit: 'hearts',
    value: 8
  },
  {
    rank: '9',
    suit: 'hearts',
    value: 9
  },
  {
    rank: '10',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'jack',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'queen',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'king',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'ace',
    suit: 'spades',
    value: 11
  },
  {
    rank: '2',
    suit: 'spades',
    value: 2
  },
  {
    rank: '3',
    suit: 'spades',
    value: 3
  },
  {
    rank: '4',
    suit: 'spades',
    value: 4
  },
  {
    rank: '5',
    suit: 'spades',
    value: 5
  },
  {
    rank: '6',
    suit: 'spades',
    value: 6
  },
  {
    rank: '7',
    suit: 'spades',
    value: 7
  },
  {
    rank: '8',
    suit: 'spades',
    value: 8
  },
  {
    rank: '9',
    suit: 'spades',
    value: 9
  },
  {
    rank: '10',
    suit: 'spades',
    value: 10
  },
  {
    rank: 'jack',
    suit: 'spades',
    value: 10
  },
  {
    rank: 'queen',
    suit: 'spades',
    value: 10
  },
  {
    rank: 'king',
    suit: 'spades',
    value: 10
  }
];

// Shuffle cards.
var shuffledCards = _.shuffle(cards);

// Deal two cards to each player.
for (var i = 0; i < players.length; i++) {
  players[i].hand.push(shuffledCards[i]);
  players[i].hand.push(shuffledCards[i + 1]);
  console.log(players[i]);
}

// Calculate scores
for (i = 0; i < players.length; i++) {
  var combinedScore = 0;

  for (var x = 0; x < players[i].hand.length; x++) {
    combinedScore += players[i].hand[x].value;
  }
  players[i].score = combinedScore;
  console.log(players[i].score);
}

// Check for winner.
var playerWithHighestScore = {
  score: 0
};
for (i = 0; i < players.length; i++) {
  if (players[i].score > playerWithHighestScore.score) {
    playerWithHighestScore = players[i];
  }
}
console.log('Player with highest score was: ', playerWithHighestScore.name);
