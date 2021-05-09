/**
 * components/Layout/Container/Side.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { size as settings } from './settings';

const ContainerSide = ({ children, size, side, className, ...others }) => {
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);

  const changeSideSize = () => {
    const winWidth = window.innerWidth;

    let width = null;
    if (winWidth >= 1600) {
      width = 1320 || winWidth - 60;
    } else {
      width = settings[size] || winWidth - 60;
    }
    let sideSize = (winWidth - width) / 2;

    if (winWidth < 480) {
      if (sideSize < 20) {
        sideSize = 20;
      }
    } else if (winWidth < 1200) {
      if (sideSize < 30) {
        sideSize = 30;
      }
    }

    if (side === 'left') {
      setPaddingRight(sideSize);
    } else {
      setPaddingLeft(sideSize);
    }
  };

  useEffect(() => {
    changeSideSize();
    window.addEventListener('resize', changeSideSize);
    return function cleanup() {
      window.removeEventListener('resize', changeSideSize);
    };
  });

  return (
    <div
      className={classNames('container__side', className)}
      style={{
        paddingLeft,
        paddingRight,
      }}
      {...others}
    >
      {children}
    </div>
  );
};

ContainerSide.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  side: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};

export default ContainerSide;
