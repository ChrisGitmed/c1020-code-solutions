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
  order by "gradeId";
  `;

  db.query(sql)
    .then(result => {
      response.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      response.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const {
    name,
    course,
    score
  } = req.body;

  if (!name ||
    !course ||
    !score ||
    score < 1 ||
    score > 100) {
    res.status(400).json({
      error: 'Enter all fields and a valid grade.'
    });
  } else {
    const sql = `
      insert into "grades" ("name","course","score")
           values ($1,
                   $2,
                   $3)
        returning *;
    `;
    const values = [name, course, score];
    db.query(sql, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const { gradeId } = req.params;
  const {
    name,
    course,
    score
  } = req.body;

  if (
    !gradeId ||
    gradeId < 1 ||
    !name ||
    !course ||
    !score ||
    score < 1 ||
    score > 100) {
    res.status(400).json({
      error: 'Enter all fields, a valid score, and a valid gradeId.'
    });
  } else {
    const sql = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
       returning*;
    `;
    const values = [name, course, score, gradeId];
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.status(200).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const { gradeId } = req.params;
  if (!gradeId || gradeId < 0) {
    res.status(400).json({
      error: 'Invalid gradeId entered'
    });
  } else {
    const sql = `
      delete from "grades"
            where "gradeId" = $1
        returning *
    ;`;
    const values = [gradeId];
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.status(200).json({});
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
