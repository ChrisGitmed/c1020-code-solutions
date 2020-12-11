import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0 };
  }

  render() {
    return (
      <div className="clock">
        <div className="circle">
          <h1>{this.state.currentTime}</h1>
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
