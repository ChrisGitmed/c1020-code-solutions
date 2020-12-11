import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange() {

  }

  handleSubmit() {

  }

  render() {
    return (
      <form>
        <label>
          Email:
          <input type="email" name="name"></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
