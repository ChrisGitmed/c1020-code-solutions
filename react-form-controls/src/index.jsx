import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  render() {
    return (
      <form>
        <label htmlFor="name">Enter your email: </label>
        <input type="email" name="name"></input>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
