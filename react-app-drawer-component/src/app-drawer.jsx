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
    const isActive = this.state.isActive;
    let svgClass = 'lnr lnr-menu';
    let menuClass = 'menu-view hidden';
    if (isActive) {
      menuClass = 'menu-view';
      svgClass = 'lnr lnr-menu hidden';
    }
    return (
      <div className="container">
        <svg className={svgClass} onClick={this.handleClick}>
          <use xlinkHref="#lnr-menu"></use>
        </svg>
        <div className={menuClass}>
          <div className="column">
            <h1>Menu</h1>
            <h4 onClick={this.handleClick}>About</h4>
            <h4 onClick={this.handleClick}>Get Started</h4>
            <h4 onClick={this.handleClick}>Sign In</h4>
          </div>
          <div className="filler" onClick={this.handleClick}></div>
        </div>
      </div>
    );

  }
}

export default AppDrawer;
