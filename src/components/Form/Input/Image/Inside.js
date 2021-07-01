/**
 * components/Form/Input/Image/Inside.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IoImageOutline } from 'react-icons/io5';

const InputImageInside = (props) => {
  const { name, imageUrl, input, buttonLabel, buttonClassName } = props;

  return (
    <div className="input-file input-file__image input-file__image--inside">
      <div className="input-file__preview">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className="input-file__main">
        <div className="input-file__action">
          <label className={buttonClassName} htmlFor={`input-${name}`}>
            {buttonLabel ? (
              <>{buttonLabel}</>
            ) : (
              <>
                <IoImageOutline />
                <span>Change Image</span>
              </>
            )}
          </label>
          {input}
        </div>
      </div>
    </div>
  );
};

InputImageInside.propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.node,
  buttonClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imageUrl: PropTypes.string,
  input: PropTypes.node,
};

export default InputImageInside;
