/**
 * components/Card/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Thumbnail from 'components/Thumbnail';
import Info from './Info';

const Card = (props) => {
  const {
    className,
    thumbnail,
    thumbnailAction,
    title,
    content,
    infoProps,
    link,
    isLinkOutside,
  } = props;

  return (
    <div className={classNames('card', className)}>
      <div className="card__inner">
        <Thumbnail
          link={link}
          isLinkOutside={isLinkOutside}
          imagePath={thumbnail}
          action={thumbnailAction}
        />
        <Info title={title} content={content} {...infoProps} />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnail: PropTypes.string,
  thumbnailAction: PropTypes.node,
  title: PropTypes.node,
  content: PropTypes.node,
  infoProps: PropTypes.object,
  link: PropTypes.string,
  isLinkOutside: PropTypes.bool,
};

export default Card;
