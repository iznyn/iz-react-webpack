/**
 * components/Form/Field/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Layout = (props) => {
  const { label, info, children, className, style } = props;

  return (
    <div
      className={classNames('form__field', `form__field--${style}`, className)}
    >
      <div className="form__field__inner">
        {label && <div className="form__field__label">{label}</div>}
        <div className="form__field__main">
          <div className="form__field__input">{children}</div>
          {info && <div className="form__field__info">{info}</div>}
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  style: 'block',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
};

export default Layout;
