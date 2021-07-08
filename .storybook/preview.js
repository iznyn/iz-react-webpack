
// Import styles
import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../src/styles/styles.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}