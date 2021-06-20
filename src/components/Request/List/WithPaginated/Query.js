/**
 * components/Request/List/WithPaginated.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useRequest from 'hooks/Request';

const Query = (props) => {
  const { name, service, onRenderContent, onSuccess } = props;
  const [page, setPage] = useState(1);

  // Fetch data
  const fetchOptions = { onSuccess, keepPreviousData: true };
  const query = useRequest([name, page], () => service(page), fetchOptions);

  return <>{onRenderContent(query, page, setPage)}</>;
};

Query.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderContent: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default Query;
