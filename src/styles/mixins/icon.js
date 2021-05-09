/**
 * Icon
 */
const icon = (
  image,
  width,
  height,
  display = 'inline-block',
  size = 'contain',
) => {
  const styles = {
    display,
    width,
    height,
    backgroundColor: 'transparent',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: size,
  };

  return styles;
};

export default icon;
