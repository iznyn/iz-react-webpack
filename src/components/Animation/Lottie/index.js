/**
 * components/Lottie/index.js
 */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import lottie from 'lottie-web';

const Lottie = (props) => {
  const { className, animationData, options } = props;
  const animEl = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [anim, setAnim] = useState(null);

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
    setAnim(lottie.loadAnimation(animOptions));
  }, []);

  return <div ref={animEl} className={classNames('lottie', className)} />;
};

Lottie.propTypes = {
  animationData: PropTypes.object,
  options: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Lottie;
