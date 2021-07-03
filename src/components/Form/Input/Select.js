/**
 * components/Form/Input/File.js
 */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoChevronDown } from 'react-icons/io5';

import Base from './Base';

const Select = (props) => {
  const {
    name,
    data,
    placeholder,
    className,
    style,
    defaultValue,
    validator,
  } = props;

  const [selected, setSelected] = useState(null);
  const [openOptions, setOpenOptions] = useState(false);
  const [isOnHover, setOnHover] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const onHoverRef = useRef();

  onHoverRef.current = isOnHover;

  useEffect(() => {
    if (data) {
      if (value) {
        data.forEach((item) => {
          if (item.value === value) {
            setSelected(item);
          }
        });
      }
    }
  }, [data]);

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
    <Base
      name={name}
      className={className}
      style={style}
      defaultValue={defaultValue}
      validator={validator}
      onRender={(field) => {
        const { onChange } = field;

        return (
          <div
            className="select"
            data-state={openOptions ? 'open' : 'close'}
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
          >
            <div className="select__selected">
              <button
                type="button"
                onClick={() => setOpenOptions(!openOptions)}
              >
                <span className="select__selected__label">
                  {selected ? selected.label : placeholder}
                </span>
                <span className="select__selected__icon">
                  <span />
                  <IoChevronDown />
                </span>
              </button>
            </div>
            <div className="select__options">
              <ul>
                {data.map((item) => (
                  <li
                    key={`option-${name}-${item.value}`}
                    className="select__option"
                    data-state={value === item.value ? 'active' : 'inactive'}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setValue(item.value);
                        setSelected(item);
                        setOpenOptions(false);
                        onChange(item.value);
                      }}
                    >
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      }}
    />
  );
};

Select.defaultProps = {
  style: 'default',
  placeholder: '',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.oneOf(['default']),
  defaultValue: PropTypes.any,
  validator: PropTypes.shape({
    hook: PropTypes.object.isRequired,
    rules: PropTypes.object.isRequired,
  }),
};

export default Select;
