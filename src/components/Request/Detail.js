/**
 * components/Request/Detail/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const RequestDetail = (props) => {
  const { onRenderContent, onRenderEmpty, emptyInfo, ...others } = props;

  return (
    <Base
      className="request__detail"
      onRenderContent={(query) => {
        const { data, isError } = query;

        return (
          <>
            {data && !isError && data.data ? (
              <div className="request__content">
                {onRenderContent(data.data.data)}
              </div>
            ) : (
              <div className="request__empty">
                {onRenderEmpty ? <>{onRenderEmpty()}</> : <p>{emptyInfo}</p>}
              </div>
            )}
          </>
        );
      }}
      {...others}
    />
  );
};

RequestDetail.defaultProps = {
  emptyInfo: 'Content is not found',
};

RequestDetail.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderContent: PropTypes.func.isRequired,
  onRenderEmpty: PropTypes.func,
  emptyInfo: PropTypes.string,
  onSuccess: PropTypes.func,
  loader: PropTypes.node,
};

export default RequestDetail;
