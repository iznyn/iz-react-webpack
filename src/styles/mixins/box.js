/**
 * Box
 */
const box = (
  width = null,
  height = null,
  padding = null,
  margin = null,
  display = 'block',
  position = null,
) => {
  let styles = {
    display,
  };

  if (width) {
    styles.width = width;
  }

  if (height) {
    styles.height = height;
  }

  if (padding) {
    styles.padding = padding;
  }

  if (margin) {
    styles.flexWrap = margin;
  }

  if (position) {
    styles = { ...styles, ...position };
  }
  return styles;
};

export default box;
