const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    testIsolation:false,
    baseUrl: 'https://rc.viewiq.com',
  },
  env: {
    MAILOSAUR_SERVER_ID: process.env.MAILOSAUR_SERVER_ID,
    MAILOSAUR_API_KEY: process.env.MAILOSAUR_API_KEY,

    VIEWIQ_LOGIN: process.env.VIEWIQ_LOGIN,
    VIEWIQ_PASSWORD: process.env.VIEWIQ_PASSWORD,
  },
  defaultCommandTimeout: 10000,
  viewportWidth: 1680,
  viewportHeight: 1050,
});
