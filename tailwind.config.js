module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Nunito', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '3xs': '0.375rem',
        '2xs': '0.5rem',
        xs: '0.625rem',
        md: '0.875rem',
      },
      colors: {
        transparent: 'transparent',
        primary: '#138537',
        secondary: '#de7d41',
        light: '#dceae0',
        light2: '#a8baad',
        muted: '#717b74',
        dark: '#4c534d',
        black: '#29352c',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '6rem',
        '8xl': '8rem',
      },
      borderWidth: {
        3: '3px',
      },
      spacing: {
        '2xs': '0.375rem',
        xs: '0.625rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '1.7rem',
        '2xl': '1.8rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
      },
      margin: {
        auto: 'auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
