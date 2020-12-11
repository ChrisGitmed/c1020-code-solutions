import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let intervalID;
    if (!this.state.isActive) {
      this.setState({ isActive: true });
      intervalID = setInterval(() => {
        this.setState({ currentTime: this.state.currentTime + 1 });
      }, 1000);
    } else {
      this.setState({ isActive: false });
      clearInterval(intervalID);
    }
  }

  render() {
    let symbol = 'fa fa-play';
    if (this.state.isActive) {
      symbol = 'fa fa-pause';
    }
    return (
      <div className="clock">
        <div className="circle">
          <h1>{this.state.currentTime}</h1>
        </div>
        <div>
          <i className={symbol} aria-hidden="true" onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch/>,
  document.querySelector('#root')
);
