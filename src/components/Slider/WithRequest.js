/**
 * components/Slider/WithRequest.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import useRequest from 'hooks/Request';
import Base from './WithData';

const WithRequest = (props) => {
  const { name, service, queryOptions, ...others } = props;

  // Fetch data
  const query = useRequest(name, service, queryOptions);
  const { isLoading, data } = query;

  return <Base loading={isLoading} data={data} {...others} />;
};

WithRequest.defaultProps = {
  layoutType: 'full',
  layoutSize: 'md',
  emptyInfo: 'Data is not found.',
};

WithRequest.propTypes = {
  key: PropTypes.string.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  queryOptions: PropTypes.object,
  loader: PropTypes.node,
  emptyInfo: PropTypes.string,
  settings: PropTypes.object,
  sliderRef: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  layoutType: PropTypes.oneOf(['full', 'left', 'right']),
  layoutSize: PropTypes.string,
};

export default WithRequest;
