import React from 'react';
import PropTypes from 'prop-types';
import iaiHires from 'images/iai_hires.png';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  toggleMenu() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    return (
      <header
        style={{
          background: `rgb(255, 255, 255)`,
          marginBottom: `1.45rem`,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className={styles.headerContainer}>
          <div
            className="w3-hide-medium w3-hide-large"
            style={{ margin: 'auto' }}
          />
          <img
            style={{
              float: 'left',
              height: '50px',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
              marginBottom: '0',
            }}
            src={iaiHires}
            alt=""
          />
          <h1 className="w3-bar-item w3-hide-small" style={{ margin: 0 }}>
            <span style={{ marginLeft: '14px' }}>{this.props.siteTitle}</span>
          </h1>
          <div style={{ margin: 'auto' }} />
          <a href="/" className="w3-bar-item w3-button w3-round w3-hide-small">
            Home
          </a>
          <a
            href="/about"
            className="w3-bar-item w3-button w3-round w3-hide-small"
          >
            About
          </a>
          <button
            type="button"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={e => this.toggleMenu(e)}
          >
            &#9776;
          </button>
        </div>

        <div
          className={`w3-bar-block w3-hide-large w3-hide-medium ${
            this.state.showMenu ? 'w3-show' : 'w3-hide'
          }`}
        >
          <a href="/" className="w3-bar-item w3-button">
            Home
          </a>
          <a href="/about" className="w3-bar-item w3-button">
            About
          </a>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
