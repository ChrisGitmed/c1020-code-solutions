import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {

  render() {
    return (
      <div className="clock">
        <div className="row circle">
          <h1>0</h1>
        </div>
        <div>
          <p>symbol</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch/>,
  document.querySelector('#root')
);
