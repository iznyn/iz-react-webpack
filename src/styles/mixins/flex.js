/**
 * Flex
 */
export const flex = (
  direction = 'row',
  align = null,
  justify = null,
  wrap = null,
) => {
  const styles = {
    display: 'flex',
    flexDirection: direction,
  };

  if (align) {
    styles.alignItems = getAlign(align);
  }

  if (justify) {
    styles.justifyContent = getAlign(justify);
  }

  if (wrap) {
    styles.flexWrap = wrap;
  }
  return styles;
};

export const row = (
  align = null,
  justify = null,
  wrap = null,
  reserve = false,
) => {
  let dir = 'row';
  if (reserve) {
    dir = 'row-reserve';
  }
  return flex(dir, align, justify, wrap);
};

export const col = (
  align = null,
  justify = null,
  wrap = null,
  reserve = false,
) => {
  let dir = 'column';
  if (reserve) {
    dir = 'column-reserve';
  }
  return flex(dir, align, justify, wrap);
};

export const rowCenter = (justify = null, reserve = false) => {
  let jcenter = null;
  if (justify) {
    jcenter = 'center';
  }
  return row('center', jcenter, null, reserve);
};

export const colCenter = (justify = null, reserve = false) => {
  let jcenter = null;
  if (justify) {
    jcenter = 'center';
  }
  return col('center', jcenter, null, reserve);
};

/**
 * Flex shortcode
 */
export const fx = flex;
export const rowc = rowCenter;
export const colc = colCenter;

/**
 * Helpers
 */
function getAlign(value) {
  let align = value;

  if (value === 'start' || value === 'end') {
    align = `flex-${value}`;
  }
  return align;
}
