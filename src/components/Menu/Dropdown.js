/**
 * components/Form/Input/File.js
 */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Dropdown = (props) => {
  const { className, selected, children } = props;

  const [openOptions, setOpenOptions] = useState(false);
  const [isOnHover, setOnHover] = useState(false);
  const onHoverRef = useRef();

  onHoverRef.current = isOnHover;

  const onBodyClick = () => {
    if (!onHoverRef.current) {
      setOpenOptions(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onBodyClick);

    return function cleanup() {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <div
      className={classNames('dropdown', className)}
      data-state={openOptions ? 'open' : 'close'}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <div className="dropdown__selected">
        <button type="button" onClick={() => setOpenOptions(!openOptions)}>
          {selected}
        </button>
      </div>
      <div className="dropdown__content">{children}</div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Dropdown;
