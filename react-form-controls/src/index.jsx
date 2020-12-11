import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  render() {
    return (
      <form>
        <input></input>
        <button></button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
