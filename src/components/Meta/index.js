/**
 * components/Meta/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Meta = ({ key, data }) => (
  <div className="card__metas">
    {data.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={`meta-${key}-${index}`} {...item} />
    ))}
  </div>
);

Meta.propTypes = {
  key: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.node,
      isLinkOutside: PropTypes.bool,
    }),
  ).isRequired,
};

export default Meta;
