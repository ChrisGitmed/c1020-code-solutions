const fs = require('fs');
const action = process.argv[2];
const data = require('./data.json');

const iD = data.nextId;

const writeToFile = () => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

if (action === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

if (action === 'add') {
  data.notes[iD] = process.argv[3];
  data.nextId++;
  writeToFile();
}

if (action === 'delete') {
  delete data.notes[process.argv[3]];
  writeToFile();
}

if (action === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
  writeToFile();
}
