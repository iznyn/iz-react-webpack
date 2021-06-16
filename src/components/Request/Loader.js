/**
 * components/Request/Detail/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import LoaderContent from 'components/Loader/Content';

const DetailLoader = ({ loader }) => (
  <div className="request__loading">
    {loader ? <>{loader}</> : <LoaderContent />}
  </div>
);

DetailLoader.propTypes = {
  loader: PropTypes.node,
};

export default DetailLoader;
