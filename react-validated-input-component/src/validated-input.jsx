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

  isNot0(password) {
    if (password.length !== 0) {
      return true;
    } else return false;
  }

  isLongerThan8(password) {
    if (password.length > 8) {
      return true;
    } else return false;
  }

  doesIncludeANumber(password) {
    let flag = false;
    for (let i = 0; i < password.length; i++) {
      if (Number(password[i]) >= 0 && Number(password[i]) <= 9) {
        flag = true;
      }
    }
    if (flag) {
      return true;
    } else return false;
  }

  doesIncludeACapitalLetter(password) {
    let flag = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
        flag = true;
      }
    }
    if (flag) {
      return true;
    } else return false;
  }

  doesIncludeSymbol(password) {
    let flag = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i]) { // MUST CHANGE; Time to learn some RegEx
        flag = true;
      }
    }
    if (flag) {
      return true;
    } else return false;
  }

  render() {
    const password = this.state.password;
    let flag = false;
    let message;
    let icon = 'lnr lnr-cross-circle padding-left';

    if (!this.isNot0(password)) {
      flag = true;
      message = 'A password is required';
    } else if (!this.isLongerThan8(password)) {
      flag = true;
      message = 'Your password is too short.';
    } else if (!this.doesIncludeANumber(password)) {
      flag = true;
      message = 'Your password must include a number';
    } else if (!this.doesIncludeACapitalLetter(password)) {
      flag = true;
      message = 'Your password must include a capital letter';
    }

    if (!flag) {
      icon = 'lnr lnr-thumbs-up padding-left';
      message = '';
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
