import {
  TEXT_SIZE_MD,
  TEXT_SIZE_SM,
  TEXT_SIZE_XL,
  TEXT_SIZE_XS,
  TEXT_SIZE_XXS,
  TEXT_SIZE_LG,
  TEXT_SIZE_XXL,
  TEXT_SIZE_XMD,
} from './config';
import { getSize } from './helpers';

/**
 * Text
 */
export const text = (
  size = TEXT_SIZE_MD,
  lineHeight = null,
  bold = null,
  italic = null,
  transform = null,
  color = null,
  decoration = null,
  align = null,
  family = null,
) => {
  const styles = {};

  if (size) {
    styles.fontSize = getSize(size);
  }

  if (lineHeight) {
    styles.lineHeight = getSize(lineHeight);
  }

  if (bold) {
    if (bold === true) {
      styles.fontWeight = 700;
    } else {
      styles.fontWeight = bold;
    }
  }

  if (italic) {
    styles.fontStyle = italic;
  }

  if (transform) {
    styles.textTransform = transform;
  }

  if (decoration) {
    styles.textDecoration = decoration;
  }

  if (align) {
    styles.textAlign = align;
  }

  if (color) {
    styles.color = color;
  }

  if (family) {
    styles.fontFamily = family;
  }
  return styles;
};

/**
 * Font
 */
export const font = (size = TEXT_SIZE_MD, color = null, family = null) => {
  const styles = {};

  if (size) {
    styles.fontSize = getSize(size);
  }

  if (color) {
    styles.color = color;
  }

  if (family) {
    styles.fontFamily = family;
  }
  return styles;
};

export const textUC = (
  size = TEXT_SIZE_MD,
  lineHeight = null,
  bold = null,
  italic = null,
  color = null,
  decoration = null,
  align = null,
  family = null,
) => {
  const transform = 'uppercase';
  return text(
    size,
    lineHeight,
    bold,
    italic,
    transform,
    color,
    decoration,
    align,
    family,
  );
};

/**
 * Text shortcode
 */
export const tx = text;
export const f = font;
export const fsxxs = () => font(TEXT_SIZE_XXS);
export const fsxs = () => font(TEXT_SIZE_XS);
export const fssm = () => font(TEXT_SIZE_SM);
export const fsmd = () => font(TEXT_SIZE_MD);
export const fsxmd = () => font(TEXT_SIZE_XMD);
export const fslg = () => font(TEXT_SIZE_LG);
export const fsxl = () => font(TEXT_SIZE_XL);
export const fsxxl = () => font(TEXT_SIZE_XXL);
