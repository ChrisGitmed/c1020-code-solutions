import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      isActive: false,
      intervalID: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClock = this.resetClock.bind(this);
  }

  handleClick() {
    if (!this.state.isActive) {
      this.setState({
        intervalID: setInterval(() => {
          this.setState({ currentTime: this.state.currentTime + 1 });
        }, 1000)
      });
      this.setState({ isActive: true });
    } else {
      clearInterval(this.state.intervalID);
      this.setState({ isActive: false });
    }
  }

  resetClock() {
    if (!this.state.isActive) {
      this.setState({ currentTime: 0 });
    }
  }

  render() {
    let symbol = 'fa fa-play';
    if (this.state.isActive) {
      symbol = 'fa fa-pause';
    }
    return (
      <div className="clock">
        <div className="circle" onClick={this.resetClock}>
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
