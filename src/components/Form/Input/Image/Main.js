/**
 * components/Form/Input/Image/Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const InputImageMain = (props) => {
  const { name, imageUrl, input, info, buttonLabel, buttonClassName } = props;

  return (
    <div className="input-file input-file__image">
      <div className="input-file__preview">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className="input-file__main">
        <div className="input-file__action">
          <label
            className={buttonClassName || 'button button--sm button--primary'}
            htmlFor={`input-${name}`}
          >
            <span>{buttonLabel}</span>
          </label>
          {input}
        </div>
        {info && <div className="input-file__info">{info}</div>}
      </div>
    </div>
  );
};

InputImageMain.defaultProps = {
  buttonLabel: 'Change Image',
};

InputImageMain.propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.node,
  buttonClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  info: PropTypes.node,
  imageUrl: PropTypes.string,
  input: PropTypes.node,
};

export default InputImageMain;
