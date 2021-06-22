/**
 * components/Form/Base.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'components/Button';
import Alert from 'components/Alert';

const FormBase = (props) => {
  const {
    className,
    onSubmit,
    formHook,
    loading,
    error,
    onRenderFields,
    onRenderSubmit,
    onRenderSubmitAfter,
    buttonSubmitLabel,
    buttonSubmitProps,
  } = props;

  const { handleSubmit } = formHook;

  return (
    <div className={classNames('form', className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className="form__top">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        <div className="form__fields">{onRenderFields(formHook)}</div>
        {onRenderSubmit ? (
          <>{onRenderSubmit()}</>
        ) : (
          <div className="form__submit">
            <div className="form__submit__main">
              <Button
                loading={loading}
                handler={() => {}}
                label={buttonSubmitLabel}
                buttonProps={{ type: 'submit', ...buttonSubmitProps }}
              />
            </div>
            {onRenderSubmitAfter && <>{onRenderSubmitAfter(formHook)}</>}
          </div>
        )}
      </form>
    </div>
  );
};

FormBase.defaultProps = {
  buttonSubmitLabel: 'Submit',
};

FormBase.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loading: PropTypes.bool,
  onRenderFields: PropTypes.func.isRequired,
  formHook: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onRenderSubmit: PropTypes.func,
  onRenderSubmitAfter: PropTypes.func,
  buttonSubmitProps: PropTypes.object,
  buttonSubmitLabel: PropTypes.string,
  error: PropTypes.string,
};

export default FormBase;
