/**
 * components/Title/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = (props) => {
  const {
    as,
    size,
    className,
    children,
    icon,
    iconPosition,
    uppercase,
    center,
    ...others
  } = props;
  const TitleTag = as;

  const getIcon = () => (
    <>
      {icon ? (
        <div className="title__icon">
          {typeof icon === 'string' ? <img src={icon} alt="" /> : <>{icon}</>}
        </div>
      ) : null}
    </>
  );

  return (
    <TitleTag
      className={classNames(
        'title',
        `title--${size}`,
        icon && 'title--have-icon',
        uppercase && 'title--uppercase',
        center && 'title--center',
        className,
      )}
      {...others}
    >
      {iconPosition === 'left' ? getIcon() : null}
      {icon ? (
        <div className="title__content">{children}</div>
      ) : (
        <>{children}</>
      )}
      {iconPosition === 'right' ? getIcon() : null}
    </TitleTag>
  );
};

Title.defaultProps = {
  size: 'md',
  as: 'h2',
  iconPosition: 'left',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
  center: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

export default Title;
