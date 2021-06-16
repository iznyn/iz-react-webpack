/**
 * components/Request/Detail/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useRequest from 'hooks/Request';
import Loader from './Loader';

const Request = (props) => {
  const {
    name,
    service,
    loader,
    onRenderContent,
    onSuccess,
    className,
    queryOptions,
  } = props;

  // Fetch data
  let fetchOptions = { onSuccess };
  if (queryOptions) {
    fetchOptions = { onSuccess, ...queryOptions };
  }
  console.log(fetchOptions);
  const query = useRequest(name, service, fetchOptions);
  const { isLoading, isFetching } = query;

  console.log(`isLoading: ${isLoading}`);
  console.log(`isFetching: ${isFetching}`);

  return (
    <div className={classNames('request', className)}>
      <div className="request__inner">
        {isLoading ? (
          <Loader loader={loader} />
        ) : (
          <div className="request__main">{onRenderContent(query)}</div>
        )}
      </div>
    </div>
  );
};

Request.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  service: PropTypes.func.isRequired,
  onRenderContent: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  loader: PropTypes.node,
  queryOptions: PropTypes.object,
};

export default Request;
