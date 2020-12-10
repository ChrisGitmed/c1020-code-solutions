import React from 'react';
// let counter = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // counter++;
    // const count = this.state.clickCounter + 1;
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }

  render() {
    const clicks = this.state.clickCounter;
    if (clicks < 3) {
      return <button className="ice-button" onClick={this.handleClick}>Ice Button</button>;
    } else if (clicks < 6) {
      return <button className="cold-button" onClick={this.handleClick}>Cold Button</button>;
    } else if (clicks < 9) {
      return <button className="warm-button" onClick={this.handleClick}>Warm Button</button>;
    } else if (clicks < 12) {
      return <button className="hot-button" onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className="nuclear-button" onClick={this.handleClick}>Nuclear Button</button>;
    }
  }
}

export default HotButton;
