import React from 'react';

class ValidatedInput extends React.Component {

  render() {
    return (
      <div className="input-container">
        <label htmlFor="password" className="row">Password</label>
        <input type="password" name="password"/>
      </div>
    );
  }
}

export default ValidatedInput;
