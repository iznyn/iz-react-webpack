/**
 * components/Meta/Author.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from 'react-icons/io5';

import Item from './Item';

const MetaAuthor = ({ name, hideIcon, ...others }) => (
  <Item label={name} icon={!hideIcon && <IoPersonCircle />} {...others} />
);

MetaAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isLinkOutside: PropTypes.bool,
  hideIcon: PropTypes.bool,
};

export default MetaAuthor;
