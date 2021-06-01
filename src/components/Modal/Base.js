/**
 * components/Modal/Base.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBase = ({ children, className, ...others }) => (
  <div className={classNames('modal', className)} {...others}>
    <div className="modal__overlay" />
    <div className="modal__main">{children}</div>
  </div>
);

ModalBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ModalBase;
