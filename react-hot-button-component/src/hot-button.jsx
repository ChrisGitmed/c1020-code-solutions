import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
  }

  render() {
    return <button>Hot Button</button>;
  }
}

export default HotButton;
