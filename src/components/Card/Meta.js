/**
 * components/Card/Meta.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meta = ({ label, icon, link, isLinkOutside }) => (
  <div className="card__meta">
    {icon && <span className="card__meta__icon">{icon}</span>}
    <div className="card__meta__content">
      {isLinkOutside ? (
        <a href={link} target="_blank">
          <span className="card__meta__label">{label}</span>
        </a>
      ) : (
        <Link to={link}>
          <span className="card__meta__label">{label}</span>
        </Link>
      )}
    </div>
  </div>
);

Meta.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node,
  isLinkOutside: PropTypes.bool,
};

export default Meta;
