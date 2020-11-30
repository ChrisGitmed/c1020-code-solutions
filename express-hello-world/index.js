const express = require('./node_modules/express');
const app = express();

app.use(function (req, res, next) {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening!');
});
