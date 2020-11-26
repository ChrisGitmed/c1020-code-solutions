/* eslint-disable no-console */
const fs = require('fs');

fs.readFile('cunningham.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
