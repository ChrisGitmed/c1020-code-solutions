const fs = require('fs');

const data = Math.floor(Math.random() * 10) + '\n';

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
