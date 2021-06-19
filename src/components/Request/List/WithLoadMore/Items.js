/**
 * components/Request/List/Items.js
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ListItems = (props) => {
  const { name, items, onRenderItem } = props;

  console.log('ListItems');

  return (
    <>
      {items.map((item, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="request__item" key={`${name}-${key}`}>
          {onRenderItem(item)}
        </div>
      ))}
    </>
  );
};

ListItems.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onRenderItem: PropTypes.func.isRequired,
};

export default memo(ListItems);
