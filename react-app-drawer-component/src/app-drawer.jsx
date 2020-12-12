import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <svg className="lnr lnr-menu" onClick={this.handleClick}>
        <use xlinkHref="#lnr-menu"></use>
      </svg>
    );
  }
}

export default AppDrawer;
