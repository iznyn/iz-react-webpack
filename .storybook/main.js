
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  "core": {
    "builder": "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['components'] = resolve('src/components');
    config.resolve.alias['hooks'] = resolve('src/hooks');
    config.resolve.alias['services'] = resolve('src/services');

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            // Inline files smaller than 10 kB
            limit: 10 * 1024,
            noquotes: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(jpg|png|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // Inline files smaller than 10 kB
            limit: 10 * 1024,
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              enabled: false,
              // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
              // Try enabling it in your environment by switching the config to:
              // enabled: true,
              // progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    });

    // Return the altered config
    return config;
  },
}