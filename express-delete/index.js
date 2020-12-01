const express = require('./node_modules/express');
const app = express();
const objectList = [
  {
    id: 4,
    name: 'Chris',
    course: 'Express',
    grade: 9001
  },
  {
    id: 7,
    name: 'Tim',
    course: 'Express',
    grade: 10000
  }
];
app.get('/api/grades', (req, res) => {
  res.json(objectList);
});

app.delete('/api/grades/:id', (req, res) => {
  for (let i = 0; i < objectList.length; i++) {
    if (objectList[i].id === Number(req.params.id)) {
      objectList.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000...');
});
