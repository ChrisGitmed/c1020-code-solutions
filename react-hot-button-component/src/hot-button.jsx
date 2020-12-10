import React from 'react';
let counter = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    counter++;
    this.setState({ clickCounter: counter });
  }

  render() {
    return <button onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
