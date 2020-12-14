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

    if (!flag) {
      flag = true;
      for (let i = 0; i < password.length; i++) {
        if (Number(password[i]) >= 0 && Number(password[i]) <= 9) {
          flag = false;
        }
      }
      if (flag) {
        message = 'Your password must include a number.';
      }

      if (!flag) {
        flag = true;
        for (let x = 0; x < password.length; x++) {
          if (password[x] === password[x].toUpperCase() && isNaN(password[x])) {
            flag = false;
          }
        }
        if (flag) {
          message = 'Your password must include a capital letter.';
        }
      }
    }

    if (flag) {
      icon = 'lnr lnr-cross-circle padding-left';
    } else {
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
