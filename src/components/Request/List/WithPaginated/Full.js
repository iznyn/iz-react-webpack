/**
 * components/Request/List/WithButtonMore.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

import ListRequest from './index';

const Full = (props) => {
  const { paginationClasses, ...others } = props;

  console.log('Pagination Full');

  return (
    <ListRequest
      onRenderActions={(query, page, setPage) => {
        const { data } = query;
        const { total_pages: totalPages } = data.data;

        return (
          <div className="request__action request__pagination">
            <ReactPaginate
              previousLabel={<IoChevronBack />}
              nextLabel={<IoChevronForward />}
              breakLabel="..."
              breakClassName="pagination__break"
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={(paginData) => {
                setPage(paginData.selected + 1);
              }}
              containerClassName={classNames('pagination', paginationClasses)}
              activeClassName="pagination--active"
            />
          </div>
        );
      }}
      {...others}
    />
  );
};

Full.defaultProps = {
  emptyInfo: 'Content is not found',
};

Full.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  paginationClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  emptyInfo: PropTypes.string,
};

export default Full;
