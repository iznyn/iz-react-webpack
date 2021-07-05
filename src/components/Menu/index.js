/**
 * components/Form/Input/File.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Items from './Items';

const Menu = (props) => {
  const { className, ...others } = props;

  return (
    <div className={classNames('menu', className)}>
      <Items {...others} />
    </div>
  );
};

Menu.propTypes = {
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  itemProps: PropTypes.object,
};

export default Menu;
