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
  order by "gradeId"
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
  const reqBody = request.body;
  if (!reqBody) {
    response.status(400).json({ error: 'Enter fields (name, course, score)' });
  } else if (!reqBody.name ||
    !reqBody.course ||
    !reqBody.score ||
    reqBody.score < 1 ||
    reqBody.score > 100) {
    response.status(400).json({ error: 'Enter all fields and a valid grade.' });
  } else {
    const name = reqBody.name;
    const course = reqBody.course;
    const score = reqBody.score;
    const sql = `
      insert into "grades" ("name","course","score")
           values ('${name}','${course}','${score}')
        returning *;
    `;
    db.query(sql)
      .then(result => {
        response.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        response.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, response) => {
  console.log(db);
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
    response.status(400).json({ error: 'Enter all fields, a valid score, and a valid gradeId.' });
  } else {
    const sql = `
      update "grades"
         set "name" = '${name}',
             "course" = '${course}',
             "score" = '${score}'
       where "gradeId" = '${gradeId}'
       returning*;
    `;
    db.query(sql)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          response.status(404).json({
            error: `Cannot find grade with 'gradeId' ${gradeId}`
          });
        } else {
          response.status(200).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        response.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
