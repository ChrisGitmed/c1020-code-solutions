/* eslint-disable no-console */
const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

const JSONparser = express.json();

app.use('/api/grades', JSONparser);

app.get('/api/grades', (request, response) => {
  const sql = `
    select *
      from "grades"
  ;`;

  db.query(sql)
    .then(result => {
      response.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      response.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (request, response) => {
  console.log('request.body:', request.body);
  if (!request.body) {
    response.status(400).json({ error: 'Enter fields (name, course, score)' });
  } else if (!request.body.name ||
    !request.body.course ||
    !request.body.score ||
    request.body.score < 1 ||
    request.body.score > 100) {
    response.status(400).json({ error: 'Enter all fields and a valid grade.' });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
