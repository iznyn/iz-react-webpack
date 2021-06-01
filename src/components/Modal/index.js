/**
 * components/Modal/index.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import Base from './Base';

const Modal = ({ open, children, showClose, onClose, ...others }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

  return (
    <Base data-state={visibility ? 'open' : 'close'} {...others}>
      <>
        {showClose ? (
          <div className="modal__close">
            <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                if (onClose) {
                  onClose();
                } else {
                  setVisibility(false);
                }
              }}
            >
              <span>
                <MdClose />
              </span>
            </button>
          </div>
        ) : null}
        <div className="modal__content">{children}</div>
      </>
    </Base>
  );
};

Modal.defaultProps = {
  showClose: true,
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  showClose: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Modal;
