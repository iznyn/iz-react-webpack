/**
 * Build css styles based on classes
 */
import getProps from './generator/props';

const style = className => {
  let styles = {};
  if (className && className !== '') {
    const classes = className.split(' ');
    classes.forEach(value => {
      const props = value.split('-');
      const css = getProps(props[0], props[1]);
      styles = { ...styles, ...css };
    });
  }

  return styles;
};

export default style;
