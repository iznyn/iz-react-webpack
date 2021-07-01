/**
 * components/Form/Input/Image.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';
import Inside from './Inside';
import Main from './Main';

const InputImage = (props) => {
  const {
    name,
    buttonLabel,
    buttonClassName,
    className,
    defaultImage,
    info,
    style,
    validator,
    onSelect,
    insideAction,
    ...others
  } = props;

  const [preview, setPreview] = useState(defaultImage);

  // on select file
  const onSelectFile = (evt) => {
    if (evt.target.files && evt.target.files.length > 0) {
      const file = evt.target.files[0];

      let imageUrl = '';
      if (typeof URL.createObjectURL !== 'undefined') {
        imageUrl = URL.createObjectURL(file);
      }
      setPreview(imageUrl);

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
      validator={validator}
      onRender={(field) => {
        const viewProps = {
          name,
          buttonLabel,
          buttonClassName,
          imageUrl: preview,
          input: (
            <input
              id={`input-${name}`}
              type="file"
              onChange={onSelectFile}
              {...field}
              {...others}
            />
          ),
        };
        return (
          <>
            {insideAction ? <Inside {...viewProps} /> : <Main {...viewProps} />}
          </>
        );
      }}
    />
  );
};

InputImage.defaultProps = {
  style: 'default',
};

InputImage.propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.node,
  buttonClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultImage: PropTypes.string,
  info: PropTypes.node,
  onSelect: PropTypes.func,
  insideAction: PropTypes.bool,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default InputImage;
