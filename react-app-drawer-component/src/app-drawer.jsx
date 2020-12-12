import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isActive = this.state.isActive;
    if (isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
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
