import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn === true) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    return (
      <div className="border toggle-off">
        <div className="circle" onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default ToggleSwitch;
