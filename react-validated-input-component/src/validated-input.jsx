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
    return (
      <div className="input-container">
        <label htmlFor="password" className="row">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}/>
        <span className="lnr lnr-cross-circle"></span>
      </div>
    );
  }
}

export default ValidatedInput;
