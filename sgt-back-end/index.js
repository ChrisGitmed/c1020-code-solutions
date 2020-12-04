/* eslint-disable no-console */
const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

console.log(db); // Avoids linter for unused variables. | REMOVE LATER

const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
