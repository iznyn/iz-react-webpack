/**
 * components/Request/List/WithPaginated.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Query from './Query';
import Items from './Items';

const WithPaginated = (props) => {
  const {
    name,
    service,
    onRenderItem,
    onRenderActions,
    onSuccess,
    ...others
  } = props;

  const checkIsEmpty = (query) => {
    const { data, isError } = query;
    if (data && !isError && data.data && data.data.data.length > 0) {
      return false;
    }
    return true;
  };

  console.log('WithPaginated');

  return (
    <Query
      name={name}
      service={service}
      onSuccess={onSuccess}
      onRenderContent={(query, page, setPage) => {
        const { isLoading, data } = query;
        return (
          <Layout
            isLoading={isLoading}
            isEmpty={checkIsEmpty(query)}
            onRenderContent={() => (
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
            )}
            {...others}
          />
        );
      }}
    />
  );
};

WithPaginated.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderActions: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default WithPaginated;
