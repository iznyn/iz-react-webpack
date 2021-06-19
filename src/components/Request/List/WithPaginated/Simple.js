/**
 * components/Request/List/WithButtonMore.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'components/Button';
import ListRequest from './index';

const Simple = (props) => {
  const {
    actionsClasses,
    buttonConfig,
    prevLabel,
    nextLabel,
    ...others
  } = props;

  console.log('Pagination Simple');

  return (
    <ListRequest
      onRenderActions={(query, page, setPage) => {
        const { data } = query;
        const { total_pages: totalPages } = data.data;

        return (
          <div
            className={classNames(
              'request__action request__pagination',
              actionsClasses,
            )}
          >
            <div className="request__action__prev">
              <Button
                label={prevLabel}
                handler={(evt) => {
                  evt.preventDefault();
                  setPage(page - 1);
                }}
                disabled={page <= 1}
                {...buttonConfig}
              />
            </div>
            <div className="request__action__next">
              <Button
                label={nextLabel}
                handler={(evt) => {
                  evt.preventDefault();
                  setPage(page + 1);
                }}
                disabled={page >= totalPages}
                {...buttonConfig}
              />
            </div>
          </div>
        );
      }}
      {...others}
    />
  );
};

Simple.defaultProps = {
  emptyInfo: 'Content is not found',
  prevLabel: 'Previous',
  nextLabel: 'Next',
};

Simple.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  actionsClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonConfig: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  emptyInfo: PropTypes.string,
  nextLabel: PropTypes.node,
  prevLabel: PropTypes.node,
};

export default Simple;
