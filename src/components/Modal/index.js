/**
 * components/Modal/index.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';

const Modal = ({ open, children, showClose, onClose, className }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

  return (
    <div
      className={classNames('modal', className)}
      data-state={visibility ? 'open' : 'close'}
    >
      <div className="modal__overlay" />
      <div className="modal__main">
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
      </div>
    </div>
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
