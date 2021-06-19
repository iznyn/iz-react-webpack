/**
 * components/Request/List/WithPaginated.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useRequest from 'hooks/Request';
import Loader from '../../Loader';
import Items from '../Items';

const WithPaginated = (props) => {
  const {
    name,
    service,
    loader,
    onRenderItem,
    onRenderEmpty,
    onRenderActions,
    emptyInfo,
    onSuccess,
    className,
  } = props;
  const [page, setPage] = useState(1);

  // Fetch data
  const fetchOptions = { onSuccess, keepPreviousData: true };
  const query = useRequest([name, page], () => service(page), fetchOptions);
  const { isLoading, data, isError } = query;

  console.log('WithPaginated');

  const checkIsEmpty = () => {
    if (data && !isError && data.data && data.data.data.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <div className={classNames('request', className)}>
      <div className="request__inner">
        {isLoading ? (
          <Loader loader={loader} />
        ) : (
          <div className="request__main">
            {!checkIsEmpty(query) ? (
              <div className="request__content">
                <>
                  <Items
                    name={name}
                    items={data.data.data}
                    onRenderItem={onRenderItem}
                  />
                  {onRenderActions && (
                    <div className="request__actions">
                      {onRenderActions(query, page, setPage)}
                    </div>
                  )}
                </>
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

WithPaginated.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderEmpty: PropTypes.func,
  onRenderActions: PropTypes.func,
  emptyInfo: PropTypes.string,
  onSuccess: PropTypes.func,
  loader: PropTypes.node,
};

export default WithPaginated;
