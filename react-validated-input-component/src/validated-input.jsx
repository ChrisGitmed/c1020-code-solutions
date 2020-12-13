import React from 'react';

class ValidatedInput extends React.Component {

  render() {
    return (
      <div className="input-container">
        <label htmlFor="password" className="row">Password</label>
        <input type="password" name="password"/>
        <span className="lnr lnr-cross-circle"></span>
      </div>
    );
  }
}

export default ValidatedInput;
