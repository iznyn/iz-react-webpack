/**
 * components/Slider/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from 'components/Container';
import ContainerSide from 'components/Container/Side';

import SliderLoader from './Loader';
import Items from './Items';
import Main from './Main';

const WithData = (props) => {
  const {
    key,
    settings,
    data,
    onRenderItem,
    loading,
    loader,
    emptyInfo,
    sliderRef,
    className,
    layoutType,
    layoutSize,
    disableSlider,
  } = props;

  const getSlider = () => (
    <div className="slider__content">
      {loading ? (
        <SliderLoader loader={loader} />
      ) : (
        <>
          {data && data.length > 0 ? (
            <>
              {disableSlider ? (
                <div className="slider__items">
                  <Items key={key} data={data} onRenderItem={onRenderItem} />
                </div>
              ) : (
                <Main settings={settings} sliderRef={sliderRef}>
                  <Items key={key} data={data} onRenderItem={onRenderItem} />
                </Main>
              )}
            </>
          ) : (
            <div className="slider__empty">{emptyInfo}</div>
          )}
        </>
      )}
    </div>
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

WithData.defaultProps = {
  layoutType: 'full',
  layoutSize: 'md',
  emptyInfo: 'Data is not found.',
  loading: false,
  disableSlider: false,
};

WithData.propTypes = {
  key: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loader: PropTypes.node,
  emptyInfo: PropTypes.string,
  settings: PropTypes.object,
  sliderRef: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  layoutType: PropTypes.oneOf(['full', 'left', 'right']),
  layoutSize: PropTypes.string,
  disableSlider: PropTypes.bool,
};

export default WithData;
