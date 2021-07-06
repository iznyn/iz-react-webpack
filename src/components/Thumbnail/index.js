/**
 * components/Card/Thumbnail.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumbnail = ({ imagePath, link, isLinkOutside, action }) => {
  //
  // Get content
  const getContent = () => (
    <div className="thumbnail__main">
      <div className="thumbnail__image">
        <img src={imagePath} alt="" />
      </div>
      {action && (
        <div className="thumbnail__action">
          <div className="thumbnail__action__inner">{action}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="thumbnail">
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
};

Thumbnail.propTypes = {
  imagePath: PropTypes.string.isRequired,
  link: PropTypes.string,
  isLinkOutside: PropTypes.bool,
  action: PropTypes.node,
};

export default Thumbnail;
