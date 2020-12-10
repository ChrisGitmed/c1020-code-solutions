import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }

  render() {
    const clicks = this.state.clickCounter;
    let className;
    let children;

    if (clicks < 3) {
      className = 'ice-button';
      children = 'Ice Button';
    } else if (clicks < 6) {
      className = 'cold-button';
      children = 'Cold Button';
    } else if (clicks < 9) {
      className = 'warm-button';
      children = 'Warm Button';
    } else if (clicks < 12) {
      className = 'hot-button';
      children = 'Hot Button';
    } else {
      className = 'nuclear-button';
      children = 'Nuclear Button';
    }
    return <button className={className} onClick={this.handleClick}>{children}</button>;
  }
}

export default HotButton;
