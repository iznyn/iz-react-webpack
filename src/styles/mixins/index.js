/* eslint-disable prefer-destructuring */
/**
 * styles/mixins
 */
import * as bgMix from './background';
import * as flexMix from './flex';
import iconMix from './icon';
import boxMix from './box';
import borderMix from './border';
import * as respMix from './responsive';
import * as posMix from './position';
import * as textMix from './text';

export const fx = flexMix.flex;
export const row = flexMix.row;
export const col = flexMix.col;
export const rowc = flexMix.rowCenter;
export const colc = flexMix.colCenter;
export const cov = bgMix.cover;
export const bg = bgMix.background;
export const deco = bgMix.deco;
export const icon = iconMix;
export const box = boxMix;
export const md = respMix.media;
export const mdq = respMix.mediaQuery;
export const media = respMix.media;
export const mediaQuery = respMix.mediaQuery;
export const pos = posMix.pos;
export const poa = posMix.poa;
export const por = posMix.por;
export const pof = posMix.pof;
export const poaf = posMix.poaf;
export const poff = posMix.poff;
export const text = textMix.text;
export const textUC = textMix.textUC;
export const font = textMix.font;
export const border = borderMix;
export const bo = borderMix;
