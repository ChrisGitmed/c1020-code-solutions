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
    let toggle = 'toggle-off';
    if (this.state.isOn) {
      toggle = 'toggle-on';
    }
    return (
      <div className={`border ${toggle}`}>
        <div className="circle" onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default ToggleSwitch;
