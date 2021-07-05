/**
 * components/Menu/Items.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Items = (props) => {
  const { data, onClick, itemProps, onRenderItem } = props;

  return (
    <ul>
      {data.map((item) => (
        <li key={`menu-${item.id}`} className="menu__item" {...itemProps}>
          <>
            {item.path ? (
              <>
                {item.isOutside ? (
                  <a href={item.path} target="_blank">
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link to={item.path}>
                    <span>{item.label}</span>
                  </Link>
                )}
              </>
            ) : (
              <button
                type="button"
                onClick={(evt) => {
                  evt.preventDefault();
                  if (onClick) {
                    onClick(evt);
                  }
                }}
              >
                <span>{item.label}</span>
              </button>
            )}
            {item.sub && (
              <div className="menu__sub">
                <Items
                  data={item.sub}
                  onClick={onClick}
                  onRenderItem={onRenderItem}
                  itemProps={itemProps}
                />
              </div>
            )}
            {onRenderItem && onRenderItem(item)}
          </>
        </li>
      ))}
    </ul>
  );
};

Items.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      sub: PropTypes.array,
    }),
  ).isRequired,
  onClick: PropTypes.func,
  onRenderItem: PropTypes.func,
  itemProps: PropTypes.object,
};

export default Items;
