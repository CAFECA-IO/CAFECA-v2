const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tw'],
    returnNull: false,
  },
  localePath: path.resolve('./src/locales'),
};
