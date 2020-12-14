import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const password = this.state.password;
    let flag = false;
    let message, icon;

    if (password.length === 0) {
      flag = true;
      message = 'A password is required.';
    } else if (password.length < 8) {
      flag = true;
      message = 'Your password is too short.';
    }
    if (flag) {
      icon = 'lnr lnr-cross-circle padding-left';
    } else {
      icon = 'lnr lnr-thumbs-up padding-left';
    }

    return (
      <div className="input-container">
        <label htmlFor="password" className="row">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}/>
        <span className={icon}></span>
        <div className="row error">{message}</div>
      </div>
    );
  }
}

export default ValidatedInput;
