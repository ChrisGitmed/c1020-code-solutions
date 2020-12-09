import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = props => {
  return <button>{props.text}</button>;
};

const element = (
  <div>
    <CustomButton text="React" />
    <CustomButton text="is" />
    <CustomButton text="cool!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
