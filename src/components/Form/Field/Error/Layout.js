/**
 * components/Form/Error/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ error }) => {
  if (error) {
    return (
      <div className="form__error">
        <p className="form__error__content">{error}</p>
      </div>
    );
  }
  return null;
};

Layout.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Layout;
