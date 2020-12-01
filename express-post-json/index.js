const express = require('express');
const app = express();
const grades = [];
let nextId = 1;

const JSONparser = express.json();

app.use('/api/grades', JSONparser);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const newGrade = {};
  newGrade.id = nextId;
  newGrade.name = req.body.name;
  newGrade.course = req.body.course;
  newGrade.grade = req.body.grade;
  grades.push(newGrade);
  nextId++;
  res.status(201).send(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000...');
});
