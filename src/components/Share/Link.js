/**
 * components/Share/Link.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FiCopy } from 'react-icons/fi';
import * as clipboard from 'clipboard-polyfill/text';
import { useSnackbar } from 'notistack';

import Button from './Button';

const ShareLink = (props) => {
  const { url, label, icon, successMessage } = props;
  const { enqueueSnackbar } = useSnackbar();

  let buttonIcon = icon;
  if (!buttonIcon) {
    buttonIcon = <FiCopy />;
  }

  return (
    <Button
      label={label}
      icon={buttonIcon}
      className="share__link"
      onClick={(evt) => {
        evt.preventDefault();
        clipboard.writeText(url);
        enqueueSnackbar(successMessage);
      }}
    />
  );
};

ShareLink.defaultProps = {
  label: 'Copy Link',
  successMessage: 'Success copy to clipboard!',
};

ShareLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.node,
  successMessage: PropTypes.node,
  icon: PropTypes.node,
};

export default ShareLink;
