import PropTypes from 'prop-types';
import React from 'react';
import { Toolbar } from 'react-md';
import logo from '../../../images/vro-logo.png';

import { headerInner, logoWrapper, siteLogo } from './header.module.scss';

class Header extends React.PureComponent {
  render() {
    const { siteTitle } = this.props;

    return (
      <>
        <Toolbar
          colored
          fixed
          title="Vera Rubin Observatory"
          titleClassName="screen-reader-only"
          className="header-primary"
        >
          <div className={headerInner}>
            <span className={logoWrapper}>
              <span className="screen-reader-only">Home</span>
              <img
                aria-hidden
                src={logo}
                alt={siteTitle}
                className={siteLogo}
              />
            </span>
          </div>
        </Toolbar>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
