/**
 * components/Layout/Container/styles.js
 */
import { makeStyles } from '@material-ui/core/styles';
import { size } from './settings';
import { media, mediaQuery } from '@csx';

const config = {
  root: {
    width: '100%',
    position: 'relative',
    margin: '0 auto',
    // padding: '0 30px',
    // ...media('slg', {
    //   padding: '0',
    // }),
    ...mediaQuery(null, '1200px', {
      padding: '0 30px',
    }),
    ...media('xs', {
      padding: '0 20px',
    }),
  },
  full: {
    padding: '0 30px',
    ...media('xs', {
      padding: '0 20px',
    }),
  },
  xxs: {
    maxWidth: size.xxs,
  },
  xs: {
    maxWidth: size.xs,
  },
  sm: {
    maxWidth: size.sm,
  },
  md: {
    maxWidth: size.md,
    ...media('slg', {
      maxWidth: size.lg,
    }),
  },
  xmd: {
    maxWidth: size.xmd,
    ...media('slg', {
      maxWidth: size.xlg,
    }),
  },
  lg: {
    maxWidth: size.lg,
  },
  xlg: {
    maxWidth: size.xlg,
  },
  xl: {
    maxWidth: size.xl,
    ...media('slg', {
      maxWidth: size.xxl,
    }),
  },
  xxl: {
    maxWidth: size.xxl,
    ...mediaQuery('1200px', null, {
      padding: '0 30px',
    }),
  },
};

export default makeStyles(config, { name: 'Container' });
