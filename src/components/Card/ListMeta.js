/**
 * components/Card/ListMeta.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Meta from './Meta';

const ListMeta = ({ key, data }) => (
  <div className="card__metas">
    {data.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Meta key={`meta-${key}-${index}`} {...item} />
    ))}
  </div>
);

ListMeta.propTypes = {
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

export default ListMeta;
