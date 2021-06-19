/**
 * components/Request/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import LoaderContent from 'components/Loader/Content';

const RequestLoader = ({ loader }) => {
  console.log('RequestLoader');
  return (
    <div className="request__loading">
      {loader ? <>{loader}</> : <LoaderContent />}
    </div>
  );
};

RequestLoader.propTypes = {
  loader: PropTypes.node,
};

export default RequestLoader;
