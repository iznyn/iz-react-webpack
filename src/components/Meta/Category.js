/**
 * components/Meta/Category.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IoFolderOpen } from 'react-icons/io5';

import { getExcerpt } from 'helpers/Content';
import Item from './Item';

const MetaCategory = ({ category, maxChars, hideIcon, ...others }) => {
  let formatted = category;
  if (maxChars) {
    formatted = getExcerpt(category, maxChars, false);
  }

  return (
    <Item label={formatted} icon={!hideIcon && <IoFolderOpen />} {...others} />
  );
};

MetaCategory.defaultProps = {
  maxChars: 15,
};

MetaCategory.propTypes = {
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  maxChars: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  isLinkOutside: PropTypes.bool,
  hideIcon: PropTypes.bool,
};

export default MetaCategory;
