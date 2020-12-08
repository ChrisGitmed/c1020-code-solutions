import React from 'react';

import ReactDOM from 'react-dom';

const myFirstReactElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(myFirstReactElement, document.getElementById('root'));
