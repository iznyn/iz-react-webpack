/**
 * components/Request/List/WithPaginated.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useRequest from 'hooks/Request';
import Layout from '../../Layout';
import Items from '../Items';

const WithPaginated = (props) => {
  const {
    name,
    service,
    onRenderItem,
    onRenderActions,
    onSuccess,
    ...others
  } = props;
  const [page, setPage] = useState(1);

  // Fetch data
  const fetchOptions = { onSuccess, keepPreviousData: true };
  const query = useRequest([name, page], () => service(page), fetchOptions);
  const { isLoading, data, isError } = query;

  console.log('WithPaginated');
  console.log(`isLoading: ${isLoading}`);
  console.log(`page: ${page}`);
  console.log(data);

  const checkIsEmpty = () => {
    if (data && !isError && data.data && data.data.data.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <Layout
      isLoading={isLoading}
      isEmpty={checkIsEmpty()}
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
};

WithPaginated.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderActions: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default WithPaginated;
