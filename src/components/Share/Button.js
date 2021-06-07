/**
 * components/Share/Button.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ShareButton = ({ label, onClick, icon, className, ...others }) => (
  <button
    type="button"
    className={classNames('share__button', className)}
    onClick={onClick}
    {...others}
  >
    <div className="share__button__inner">
      {icon && <div className="share__button__icon">{icon}</div>}
      <div className="share__button__label">{label}</div>
    </div>
  </button>
);

ShareButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  icon: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ShareButton;
