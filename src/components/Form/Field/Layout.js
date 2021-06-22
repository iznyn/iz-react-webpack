/**
 * components/Form/Field/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Error from './Error';

const Layout = (props) => {
  const { name, label, info, children, className, style, validator } = props;

  const renderError = () => {
    if (validator) {
      const { hook, messages } = validator;
      const {
        formState: { errors },
      } = hook;

      return <Error name={name} errors={errors} messages={messages} />;
    }
    return null;
  };

  return (
    <div
      className={classNames('form__field', `form__field--${style}`, className)}
      data-name={name}
    >
      <div className="form__field__inner">
        {label && (
          <div className="form__field__label">
            <label htmlFor={`input-${name}`}>{label}</label>
          </div>
        )}
        <div className="form__field__main">
          <div className="form__field__input">
            {children}
            {renderError()}
          </div>
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
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['block', 'inline']),
  label: PropTypes.string,
  info: PropTypes.node,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
  }),
};

export default Layout;
