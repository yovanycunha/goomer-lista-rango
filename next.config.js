const withImages = require('next-images');
const withFonts = require('nextjs-fonts');

const path = require('path');

module.exports = withImages(
  withFonts({
    sassOptions: {
      cssModules: true,
      includePaths: [path.join(__dirname, 'src')],
    },
    pageExtensions: ['page.tsx'],
    handleImages: ['jpg', 'jpeg', 'png', 'webp'],
    images: {
      domains: ['images.unsplash.com'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    env: {
      STAGE: process.env.STAGE,
    },
  })
);
