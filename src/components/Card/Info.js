/**
 * components/Card/Info.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

const Info = (props) => {
  const {
    title,
    content,
    meta,
    top,
    bottom,
    link,
    isLinkOutside,
    readMore,
  } = props;

  //
  // Get read more
  const getReadMore = () => {
    if (readMore && link) {
      const label = readMore.label || 'Read more';
      const btnProps = readMore.btnProps || {};

      return (
        <Button
          label={label}
          path={link}
          isLinkOutside={isLinkOutside}
          {...btnProps}
        />
      );
    }
    return null;
  };

  return (
    <div className="card__info">
      <div className="card__info__inner">
        <div className="card__info__top">
          {top && <>{top}</>}
          <div className="card__title">
            <h3>
              {isLinkOutside ? (
                <a href={link} target="_blank">
                  {title}
                </a>
              ) : (
                <Link to={link}>{title}</Link>
              )}
            </h3>
          </div>
        </div>
      </div>
      <div className="card__info__main">
        {content && <div className="card__content">{content}</div>}
        {meta && <>{meta}</>}
      </div>
      {getReadMore()}
      {bottom && <div className="card__info__bottom">{bottom}</div>}
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  meta: PropTypes.node,
  top: PropTypes.node,
  bottom: PropTypes.node,
  readMore: PropTypes.shape({
    label: PropTypes.node,
    btnProps: PropTypes.object,
  }),
  link: PropTypes.string,
  isLinkOutside: PropTypes.bool,
};

export default Info;
