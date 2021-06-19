/**
 * components/Request/List/Items.js
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ListItems = (props) => {
  const { name, items, onRenderItem } = props;

  console.log('ListItems');

  return (
    <div className="request__items">
      {items.map((item, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="request__item" key={`${name}-${key}`}>
          {onRenderItem(item)}
        </div>
      ))}
    </div>
  );
};

ListItems.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onRenderItem: PropTypes.func.isRequired,
};

export default memo(ListItems);
