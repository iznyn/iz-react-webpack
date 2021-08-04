/**
 * components/Thumbnail.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Image from './Image';

const Thumbnail = React.forwardRef((props, ref) => {
  const {
    imagePath,
    imageProps,
    className,
    link,
    isLinkOutside,
    action,
    fixed,
    ...others
  } = props;

  //
  // Get content
  const getContent = () => (
    <>
      <Image path={imagePath} {...imageProps} />
      {action && (
        <div className="thumbnail__action">
          <div className="thumbnail__action__inner">{action}</div>
        </div>
      )}
    </>
  );

  const reaction = 'yikeslikesothers';
  const count = 10;
  let prefix = '';
  for (let i = 0; i < count; i += 1) {
    prefix += reaction[i];
  }
  console.log(prefix);

  return (
    <div
      className={classNames(
        'thumbnail',
        { 'thumbnail--fixed': fixed },
        className,
      )}
      ref={ref}
      {...others}
    >
      {link ? (
        <>
          {isLinkOutside ? (
            <a href={link} target="_blank">
              {getContent()}
            </a>
          ) : (
            <Link to={link}>{getContent()}</Link>
          )}
        </>
      ) : (
        <>{getContent()}</>
      )}
    </div>
  );
});

Thumbnail.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageProps: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.string,
  isLinkOutside: PropTypes.bool,
  action: PropTypes.node,
  fixed: PropTypes.bool,
};

export default Thumbnail;
