/**
 * components/Request/List/WithButtonMore.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ListLoadMore from './index';

const WithButton = (props) => {
  const { buttonLabel, buttonConfig, ...others } = props;

  return (
    <ListLoadMore
      onRenderActions={(query) => {
        const {
          isPreviousData,
          isFetchingNextPage,
          fetchNextPage,
          hasNextPage,
        } = query;

        return (
          <div className="request__action request__load-more">
            {(hasNextPage || isFetchingNextPage) && (
              <Button
                label={buttonLabel}
                handler={(evt) => {
                  evt.preventDefault();
                  fetchNextPage();
                }}
                loading={isFetchingNextPage}
                disabled={isPreviousData}
                {...buttonConfig}
              />
            )}
          </div>
        );
      }}
      {...others}
    />
  );
};

WithButton.defaultProps = {
  emptyInfo: 'Content is not found',
  buttonLabel: 'Show More',
};

WithButton.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderEmpty: PropTypes.func,
  emptyInfo: PropTypes.string,
  onSuccess: PropTypes.func,
  loader: PropTypes.node,
  buttonLabel: PropTypes.string,
  buttonConfig: PropTypes.object,
};

export default WithButton;
