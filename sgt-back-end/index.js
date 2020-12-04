/* eslint-disable no-console */
const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
