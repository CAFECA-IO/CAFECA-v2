/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
          {key: 'Access-Control-Allow-Origin', value: '*'},
          {key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT'},
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    CAFECA_ADDRESS_IN_ENGLISH: process.env.CAFECA_ADDRESS_IN_ENGLISH,
    CAFECA_ADDRESS_IN_CHINESE: process.env.CAFECA_ADDRESS_IN_CHINESE,
    CAFECA_ADDRESS_ON_GOOGLE_MAP: process.env.CAFECA_ADDRESS_ON_GOOGLE_MAP,
    CAFECA_PHONE_NUMBER: process.env.CAFECA_PHONE_NUMBER,
    REACT_APP_GITHUB_LINK: process.env.REACT_APP_GITHUB_LINK,
  },
};

module.exports = nextConfig;
