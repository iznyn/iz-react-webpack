/**
 * components/Form/Input/Image/Cropper.js
 */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import Alert from 'components/Alert';
import Button from 'components/Button';
import Modal from 'components/Modal/Base';

const ImageCropper = (props) => {
  const { open, photo, onChange, onCancel, submitLabel, ...others } = props;
  const [cropped, setCropped] = useState(null);
  const [croppedBlob, setCroppedBlob] = useState(null);
  const cropperEl = useRef(null);

  //
  // doCrop
  //
  const doCrop = () => {
    if (cropperEl && cropperEl.current) {
      const imageElement = cropperEl?.current;
      const cropperInst = imageElement?.cropper;
      const croppedCanvas = cropperInst.getCroppedCanvas();
      croppedCanvas.toBlob((blob) => {
        setCroppedBlob(blob);
      });
      setCropped(croppedCanvas.toDataURL());
    }
  };

  //
  // doCrop
  //
  const onUpdate = (evt) => {
    evt.preventDefault();
    onChange(cropped, croppedBlob);
  };

  return (
    <Modal
      data-state={open ? 'open' : 'close'}
      className="input-file__cropper"
      {...others}
    >
      <div className="input-file__cropper__content">
        <div className="input-file__cropper__main">
          {photo ? (
            <div className="input-file__cropper__editor">
              <div className="input-file__cropper__editor__main">
                <Cropper
                  ref={cropperEl}
                  src={photo}
                  style={{ height: 400, width: '100%' }}
                  // Cropper.js options
                  aspectRatio={1}
                  guides={false}
                  cropBoxResizable={false}
                  autoCropArea={0.3}
                  // eslint-disable-next-line react/jsx-no-bind
                  crop={doCrop}
                />
              </div>
            </div>
          ) : (
            <div className="input-file__cropper__error">
              <Alert variant="danger">Image not selected.</Alert>
            </div>
          )}
        </div>
        <div className="input-file__cropper__bottom">
          <div className="input-file__cropper__action">
            <Button
              className="input-file__cropper__action__cancel"
              variant="gray"
              label="Cancel"
              handler={() => onCancel()}
            />
          </div>
          {photo ? (
            <div className="input-file__cropper__action">
              <Button
                className="input-file__cropper__action__update"
                label={submitLabel}
                handler={onUpdate}
              />
            </div>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

ImageCropper.defaultProps = {
  submitLabel: 'Update photo',
};

ImageCropper.propTypes = {
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  photo: PropTypes.any,
  submitLabel: PropTypes.string,
};

export default ImageCropper;
