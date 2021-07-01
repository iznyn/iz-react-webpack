/**
 * components/Form/Input/File.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const InputFile = (props) => {
  const {
    name,
    label,
    labelClassName,
    className,
    style,
    defaultValue,
    validator,
    onSelect,
    ...others
  } = props;

  const [fileName, setFileName] = useState('');

  // on select file
  const onSelectFile = (evt) => {
    if (evt.target.files && evt.target.files.length > 0) {
      const file = evt.target.files[0];
      setFileName(file.name);
      if (onSelect) {
        onSelect(file, evt);
      }
    }
  };

  return (
    <Base
      name={name}
      className={className}
      style={style}
      defaultValue={defaultValue}
      validator={validator}
      onRender={(field) => (
        <div className="input-file">
          <div className="input-file__main">
            <label
              className={labelClassName || 'button button--sm button--primary'}
              htmlFor={`input-${name}`}
            >
              <span>{label}</span>
            </label>
            <input
              id={`input-${name}`}
              type="file"
              onChange={onSelectFile}
              {...field}
              {...others}
            />
          </div>
          {fileName && fileName !== '' && (
            <div className="input-file__value">{fileName}</div>
          )}
        </div>
      )}
    />
  );
};

InputFile.defaultProps = {
  style: 'default',
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultValue: PropTypes.any,
  onSelect: PropTypes.func,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputFile;
