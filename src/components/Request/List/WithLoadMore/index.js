/**
 * components/Request/List/WithLoadMore/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useInfiniteRequest } from 'hooks/Request';
import Loader from '../../Loader';
import Items from './Items';

const WithLoadMore = (props) => {
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

  // Fetch data
  const fetchOptions = {
    onSuccess,
    getNextPageParam: (lastData) => {
      const currentPage = lastData.data.page;
      const totalPages = lastData.data.total_pages;
      let nextPage = currentPage + 1;
      if (nextPage > totalPages) {
        nextPage = null;
      }
      return nextPage;
    },
  };
  const query = useInfiniteRequest(
    name,
    ({ pageParam = 1 }) => service(pageParam),
    fetchOptions,
  );
  const { status, data } = query;

  const checkIsEmpty = () => {
    if (
      status !== 'error' &&
      data &&
      data.pages.length > 0 &&
      data.pages[0].data.total > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className={classNames('request', className)}>
      <div className="request__inner">
        {status === 'loading' ? (
          <Loader loader={loader} />
        ) : (
          <div className="request__main">
            {!checkIsEmpty() ? (
              <div className="request__content">
                <>
                  <div className="request__items">
                    {data.pages.map((group, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <React.Fragment key={index}>
                        <Items
                          name={name}
                          items={group.data.data}
                          onRenderItem={onRenderItem}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  {onRenderActions && (
                    <div className="request__actions">
                      {onRenderActions(query, data.pages)}
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

WithLoadMore.propTypes = {
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

export default WithLoadMore;
