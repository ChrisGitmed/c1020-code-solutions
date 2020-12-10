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

    if (clicks < 3) {
      this.props.className = 'ice-button';
      this.props.children = 'Ice Button';
    } else if (clicks < 6) {
      this.props.className = 'cold-button';
      this.props.children = 'Cold Button';
    } else if (clicks < 9) {
      this.props.className = 'warm-button';
      this.props.children = 'Warm Button';
    } else if (clicks < 12) {
      this.props.className = 'hot-button';
      this.props.children = 'Hot Button';
    } else {
      this.props.className = 'nuclear-button';
      this.props.children = 'Nuclear Button';
    }
    return <button className={this.props.className} onClick={this.handleClick}>{this.props.children}</button>;
  }
}

export default HotButton;
