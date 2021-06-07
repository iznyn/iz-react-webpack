/**
 * components/Share/Social.js
 */

import React from 'react';
import PropTypes from 'prop-types';

import { getSocialLink, getSocialIcon, getSocialLabel } from './Helpers';
import Button from './Button';

const ShareSocial = (props) => {
  const { type, url, title, label, icon, windowWidth, windowHeight } = props;

  // Get button label
  let buttonLabel = label;
  if (!buttonLabel) {
    buttonLabel = getSocialLabel(type);
  }

  // Get button icon
  let buttonIcon = icon;
  if (!buttonIcon) {
    buttonIcon = getSocialIcon(type);
  }

  //
  // Open window
  //
  const openWindow = () => {
    const shareUrl = getSocialLink(type, url, title);
    const top = (window.innerHeight - windowHeight) / 2;
    const left = (window.innerWidth - windowWidth) / 2;

    let config = 'toolbar=yes,scrollbars=no,resizable=no';
    config += `,width=${windowHeight}`;
    config += `,height=${windowWidth}`;
    config += `,top=${top}`;
    config += `,left=${left}`;

    window.open(shareUrl, '', config);
  };

  return (
    <Button
      label={buttonLabel}
      icon={buttonIcon}
      className={`share__social share__social__${type}`}
      onClick={(evt) => {
        evt.preventDefault();
        openWindow();
      }}
    />
  );
};

ShareSocial.defaultProps = {
  windowWidth: 680,
  windowHeight: 380,
};

ShareSocial.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.node,
  icon: PropTypes.node,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
};

export default ShareSocial;
