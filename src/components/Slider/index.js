/**
 * components/Slider/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from 'components/Container';
import ContainerSide from 'components/Container/Side';
import Main from './Main';

const Slider = (props) => {
  const {
    settings,
    children,
    sliderRef,
    className,
    layoutType,
    layoutSize,
  } = props;

  const getSlider = () => (
    <Main settings={settings} sliderRef={sliderRef}>
      {children}
    </Main>
  );

  return (
    <div
      className={classNames(
        'slider',
        layoutType !== 'full'
          ? 'slider--full'
          : `slider--side slider--${layoutType}`,
        className,
      )}
    >
      {layoutType === 'full' ? (
        <Container size={layoutSize}>{getSlider()}</Container>
      ) : (
        <ContainerSide side={layoutType} size={layoutSize}>
          {getSlider()}
        </ContainerSide>
      )}
    </div>
  );
};

Slider.defaultProps = {
  layoutType: 'full',
  layoutSize: 'md',
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  sliderRef: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  layoutType: PropTypes.oneOf(['full', 'left', 'right']),
  layoutSize: PropTypes.string,
};

export default Slider;
