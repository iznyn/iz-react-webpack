/**
 * components/Meta/Item.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const WithValues = ({ key, values, icon, isLinkOutside, maxCount }) => {
  //
  // Get link
  const getLink = (link, label) => (
    <>
      {isLinkOutside ? (
        <a href={link} target="_blank">
          <span className="meta__label">{label}</span>
        </a>
      ) : (
        <Link to={link}>
          <span className="meta__label">{label}</span>
        </Link>
      )}
    </>
  );

  //
  // Get more contents
  const getMoreContents = () => {
    const contents = [];
    const start = values.length - maxCount;
    for (let i = start; i < values.length; i += 1) {
      const item = values[i];
      contents.push(
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`${key}-${i}`}>
          {getLink(item.link, item.label)}
        </React.Fragment>,
      );
      if (i < values.length - 1) {
        contents.push(
          // eslint-disable-next-line react/no-array-index-key
          <span key={`${key}-sep-${i}`} className="meta__separator">
            ,{' '}
          </span>,
        );
      }
    }

    return contents;
  };

  //
  // Get contents
  const getContents = () => {
    const contents = [];
    let max = maxCount;
    if (max > values.length) {
      max = values.length;
    }
    values.forEach((value, index) => {
      if (index < max) {
        contents.push(
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${key}-${index}`}>
            {getLink(value.link, value.label)}
          </React.Fragment>,
        );
        if (index < max - 1) {
          contents.push(
            // eslint-disable-next-line react/no-array-index-key
            <span key={`${key}-sep-${index}`} className="meta__separator">
              ,{' '}
            </span>,
          );
        }
      }
    });

    if (values.length > maxCount) {
      contents.push(
        <span className="meta__suffix">
          {' '}
          <button type="button" data-tip data-for={`meta-tooltip-${key}`}>
            {' '}
            (+{values.length - maxCount})
          </button>
          <ReactTooltip
            id={`meta-tooltip-${key}`}
            className="meta__suffix__tooltip"
            type="dark"
            effect="solid"
            event="click"
            globalEventOff="click"
            clickable
          >
            {getMoreContents()}
          </ReactTooltip>
        </span>,
      );
    }
    return contents;
  };

  return (
    <div className="meta">
      {icon && <span className="meta__icon">{icon}</span>}
      <div className="meta__content">{getContents()}</div>
    </div>
  );
};

WithValues.defaultProps = {
  maxCount: 3,
};

WithValues.propTypes = {
  key: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  maxCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  icon: PropTypes.node,
  isLinkOutside: PropTypes.bool,
};

export default WithValues;
