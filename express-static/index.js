const express = require('express');
const path = require('path');

const app = express();

const fullPath = path.join(__dirname, 'public');
console.log('fullPath: ', fullPath);

const files = express.static(fullPath);

app.use(files);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000...');
});
