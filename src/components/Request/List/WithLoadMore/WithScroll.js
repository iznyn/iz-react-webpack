/**
 * components/Request/List/WithLoadMore/WithScroll.js
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import ListLoadMore from './index';

const WithScroll = (props) => {
  const { moreLoader, loadingMoreLabel, ...others } = props;

  return (
    <ListLoadMore
      onRenderActions={(query) => (
        <ScrollIndicator
          query={query}
          loadingMoreLabel={loadingMoreLabel}
          moreLoader={moreLoader}
        />
      )}
      {...others}
    />
  );
};

WithScroll.defaultProps = {
  emptyInfo: 'Content is not found',
  loadingMoreLabel: 'Load more ...',
};

WithScroll.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  emptyInfo: PropTypes.string,
  moreLoader: PropTypes.node,
  loadingMoreLabel: PropTypes.string,
};

const ScrollIndicator = ({ moreLoader, loadingMoreLabel, query }) => {
  const loadMoreRef = useRef();
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = query;

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div className="request__action request__load-more" ref={loadMoreRef}>
      <div
        className="request__action"
        data-state={isFetchingNextPage ? 'show' : 'hide'}
      >
        {moreLoader ? <>{moreLoader}</> : <p>{loadingMoreLabel}</p>}
      </div>
    </div>
  );
};

ScrollIndicator.propTypes = {
  query: PropTypes.object,
  moreLoader: PropTypes.node,
  loadingMoreLabel: PropTypes.string,
};

export default WithScroll;
