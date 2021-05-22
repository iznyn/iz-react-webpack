/**
 * components/Loader/Page.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';

import Modal from 'components/Modal';

const LoaderPage = ({ info, spinner }) => (
  <Modal className="loader__page">
    <div className="loader__page__content">
      <div className="loader__page__icon">
        {spinner ? (
          <>{spinner}</>
        ) : (
          <span className="loader__page__spinner">
            <CgSpinner />
          </span>
        )}
      </div>
      <div className="loader__page__info">
        {info ? <>{info}</> : <p>Please wait...</p>}
      </div>
    </div>
  </Modal>
);

LoaderPage.propTypes = {
  info: PropTypes.node,
  spinner: PropTypes.node,
};

export default LoaderPage;
