import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }

  render() {
    if (this.state.isActive) {
      return (
        <div className="column">
          <h1>Menu</h1>
          <h4>About</h4>
          <h4>Get Started</h4>
          <h4>Sign In</h4>
        </div>
      );
    } else {
      return (
        <svg className="lnr lnr-menu" onClick={this.handleClick}>
          <use xlinkHref="#lnr-menu"></use>
        </svg>
      );
    }
  }
}

export default AppDrawer;
