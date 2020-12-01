const express = require('./node_modules/express');
const app = express();
const objectList = [
  {
    id: 1,
    name: 'Chris',
    course: 'Express',
    grade: 9001
  },
  {
    id: 2,
    name: 'Tim',
    course: 'Express',
    grade: 10000
  }
];
app.get('/api/grades', (req, res) => {
  res.json(objectList);
});

app.delete('/api/grades/:id', (req, res) => {
  objectList.splice(req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening!');
});
