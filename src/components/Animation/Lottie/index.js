/**
 * components/Lottie/index.js
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import lottie from 'lottie-web';

const Lottie = (props) => {
  const { className, animationData, options } = props;
  const animEl = useRef(null);

  const onAnimLoaded = () => {
    console.log('Anim Loaded');
  };

  useEffect(() => {
    const animOptions = {
      container: animEl.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice',
      },
      ...options,
    };
    const anim = lottie.loadAnimation(animOptions);
    anim.addEventListener('loaded_images', onAnimLoaded);

    return function cleanup() {
      anim.removeEventListener('loaded_images', onAnimLoaded);
    };
  }, []);

  return <div ref={animEl} className={classNames('lottie', className)} />;
};

Lottie.propTypes = {
  animationData: PropTypes.object,
  options: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Lottie;
