import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {

  render() {
    return (
      <div className="clock">
        <div className="circle">
          <h1>0</h1>
        </div>
        <div>
          <i className="fa fa-play" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch/>,
  document.querySelector('#root')
);
