/**
 * components/Request/List/WithButtonMore.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ListRequest from './index';

const WithButtonMore = (props) => {
  const { name, service, buttonLabel, buttonConfig, ...others } = props;
  const [page, setPage] = useState(1);

  // console.log('WithButtonMore');

  //
  // TODO: pemanggilan react-query harus diletakkan
  // pada component yang sama untuk perubahan state page
  // untuk mencegah re-rendering
  // Atau dengan kata lain kode pada ../Base.js dan List/index.js
  // digabungkan di komponen ini.
  //

  return (
    <ListRequest
      name={[name, page]}
      service={() => service(page)}
      queryOptions={{ keepPreviousData: true }}
      onRenderAfter={(query) => {
        const { data, isPreviousData } = query;
        const { total_pages: totalPages } = data.data;

        return (
          <div className="request__action request__load-more">
            {totalPages > page && (
              <Button
                label={buttonLabel}
                handler={(evt) => {
                  evt.preventDefault();
                  setPage((old) => old + 1);
                }}
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
