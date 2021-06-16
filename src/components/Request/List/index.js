/**
 * components/Request/List/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const RequestList = (props) => {
  const {
    name,
    onRenderItem,
    onRenderEmpty,
    emptyInfo,
    onRenderAfter,
    ...others
  } = props;

  const checkIsEmpty = (query) => {
    const { data, isError } = query;
    if (data && !isError && data.data && data.data.data.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <Base
      className="request__list"
      name={name}
      onRenderContent={(query) => {
        const { data } = query;

        return (
          <>
            {!checkIsEmpty(query) ? (
              <div className="request__content">
                <>
                  <div className="request__items">
                    {data.data.data.map((item, key) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className="request__item" key={`${name}-${key}`}>
                        {onRenderItem(item)}
                      </div>
                    ))}
                  </div>
                  {onRenderAfter && onRenderAfter(query)}
                </>
              </div>
            ) : (
              <div className="request__empty">
                {onRenderEmpty ? <>{onRenderEmpty()}</> : <p>{emptyInfo}</p>}
              </div>
            )}
          </>
        );
      }}
      {...others}
    />
  );
};

RequestList.defaultProps = {
  emptyInfo: 'Content is not found',
};

RequestList.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  service: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderEmpty: PropTypes.func,
  onRenderAfter: PropTypes.func,
  emptyInfo: PropTypes.string,
  loader: PropTypes.node,
};

export default RequestList;
