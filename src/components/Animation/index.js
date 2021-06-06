/**
 * pages/Homepage/index.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Animation = (props) => {
  const { children, classNames, timeout, visibility } = props;

  return (
    <TransitionGroup component={null}>
      {visibility && (
        <CSSTransition classNames={classNames} timeout={timeout}>
          {children}
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

Animation.defaultProps = {
  timeout: 0,
};

Animation.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  timeout: PropTypes.number,
  visibility: PropTypes.bool,
};

export default Animation;
