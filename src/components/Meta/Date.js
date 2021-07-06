/**
 * components/Meta/Date.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IoCalendar } from 'react-icons/io5';
import format from 'date-fns/format';

import Item from './Item';

const MetaDate = ({ date, dateFormat, hideIcon, ...others }) => {
  const formatted = format(new Date(date), dateFormat);

  return (
    <Item label={formatted} icon={!hideIcon && <IoCalendar />} {...others} />
  );
};

MetaDate.defaultProps = {
  dateFormat: 'dd MMMM yyyy',
};

MetaDate.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dateFormat: PropTypes.string,
  isLinkOutside: PropTypes.bool,
  hideIcon: PropTypes.bool,
};

export default MetaDate;
