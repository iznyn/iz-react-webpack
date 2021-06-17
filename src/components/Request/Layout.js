/**
 * components/Request/List/WithPaginated.js
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Loader from './Loader';

const Layout = (props) => {
  const {
    isLoading,
    loader,
    onRenderContent,
    isEmpty,
    onRenderEmpty,
    emptyInfo,
    className,
  } = props;

  console.log('Request > Layout');

  return (
    <div className={classNames('request', className)}>
      <div className="request__inner">
        {isLoading ? (
          <Loader loader={loader} />
        ) : (
          <div className="request__main">
            {!isEmpty ? (
              <div className="request__content">{onRenderContent()}</div>
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

Layout.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onRenderContent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loader: PropTypes.node,
  isEmpty: PropTypes.bool,
  onRenderEmpty: PropTypes.func,
  emptyInfo: PropTypes.string,
};

export default memo(Layout);
