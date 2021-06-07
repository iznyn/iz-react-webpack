/**
 * components/Share/Helpers.js
 */
import React from 'react';
import {
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoLinkedin,
} from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';
import { FaDigg } from 'react-icons/fa';

//
// Get social link
//
export const getSocialLink = (type, link, title = '') => {
  let socialLink = '';

  switch (type) {
    case 'facebook':
      socialLink = `http://www.facebook.com/sharer.php?u=${link}&title=${title}`;
      break;
    case 'twitter':
      socialLink = `http://twitter.com/share?url=${link}&text=${title}`;
      break;
    case 'googleplus':
      socialLink = `https://plus.google.com/share?url=${link}`;
      break;
    case 'digg':
      socialLink = `http://www.digg.com/submit?url=${link}`;
      break;
    case 'linkedin':
      socialLink = `http://www.linkedin.com/shareArticle?mini=true&url=${link}`;
      break;
    default:
      break;
  }
  return socialLink;
};

//
// Get social icon
//
export const getSocialIcon = (type) => {
  let icon = '';

  switch (type) {
    case 'facebook':
      icon = <CgFacebook />;
      break;
    case 'twitter':
      icon = <IoLogoTwitter />;
      break;
    case 'googleplus':
      icon = <IoLogoGoogleplus />;
      break;
    case 'digg':
      icon = <FaDigg />;
      break;
    case 'linkedin':
      icon = <IoLogoLinkedin />;
      break;
    default:
      break;
  }
  return icon;
};

//
// Get social label
//
export const getSocialLabel = (type) => {
  let label = '';

  switch (type) {
    case 'facebook':
      label = 'Facebook';
      break;
    case 'twitter':
      label = 'Twitter';
      break;
    case 'googleplus':
      label = 'Google+';
      break;
    case 'digg':
      label = 'Digg';
      break;
    case 'linkedin':
      label = 'Linkedin';
      break;
    default:
      break;
  }
  return label;
};
