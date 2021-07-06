/**
 * components/Meta/Item.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ label, icon, link, isLinkOutside }) => (
  <div className="meta">
    {icon && <span className="meta__icon">{icon}</span>}
    <div className="meta__content">
      {isLinkOutside ? (
        <a href={link} target="_blank">
          <span className="meta__label">{label}</span>
        </a>
      ) : (
        <Link to={link}>
          <span className="meta__label">{label}</span>
        </Link>
      )}
    </div>
  </div>
);

Item.propTypes = {
  label: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node,
  isLinkOutside: PropTypes.bool,
};

export default Item;
