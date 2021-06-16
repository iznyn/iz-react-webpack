/**
 * components/Request/List/WithPagination.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import useRequest from 'hooks/Request';
import Loader from './Loader';

const WithPagination = (props) => {
  const {
    name,
    service,
    loader,
    onRenderContent,
    onRenderEmpty,
    emptyInfo,
    onSuccess,
  } = props;

  // Fetch data
  const { isLoading, isError, data } = useRequest(name, service, { onSuccess });

  return (
    <div className="request request__detail">
      <div className="request__inner">
        {isLoading ? (
          <Loader loader={loader} />
        ) : (
          <div className="request__main">
            {data && !isError && data.data ? (
              <div className="request__content">
                {onRenderContent(data.data.data)}
              </div>
            ) : (
              <div className="request__empty">
                {onRenderEmpty ? <>{onRenderEmpty()}</> : <p>{emptyInfo}</p>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

WithPagination.defaultProps = {
  emptyInfo: 'Content is not found',
};

WithPagination.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderContent: PropTypes.func.isRequired,
  onRenderEmpty: PropTypes.func,
  emptyInfo: PropTypes.string,
  onSuccess: PropTypes.func,
  loader: PropTypes.node,
};

export default WithPagination;
