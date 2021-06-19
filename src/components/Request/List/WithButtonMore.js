/**
 * components/Request/List/WithButtonMore.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ListRequest from './WithPaginated';

const WithButtonMore = (props) => {
  const { buttonLabel, buttonConfig, ...others } = props;

  console.log('WithButtonMore');

  return (
    <ListRequest
      onRenderActions={(query, page, setPage) => {
        const { data, isPreviousData, isFetching } = query;
        const { total_pages: totalPages } = data.data;

        return (
          <div className="request__action request__load-more">
            {(totalPages > page || isFetching) && (
              <Button
                label={buttonLabel}
                handler={(evt) => {
                  evt.preventDefault();
                  setPage((old) => old + 1);
                }}
                loading={isFetching}
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

WithButtonMore.defaultProps = {
  emptyInfo: 'Content is not found',
  buttonLabel: 'Show More',
};

WithButtonMore.propTypes = {
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

export default WithButtonMore;
