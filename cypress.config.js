const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter",
    "cypressMochawesomeReporterReporterOptions": {
      "reportDir": "cypress/reports",
      "charts": true,
      "reportPageTitle": "My Test Suite",
      "embeddedScreenshots": true,
      "inlineAssets": true
    },
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/reports/junit/results.xml"
    }
  },


  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require("cypress-localstorage-commands/plugin")(on, config);
      require("cypress-mochawesome-reporter/plugin")(on, config);
      require('@cypress/grep/src/plugin')(config);


      return config;
    },
    
  },

  
  scrollBehavior: 'nearest',
  requestTimeout: 15000,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 680000,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,

  env: {
    url: "https://cloud.appdev.apps.yokogawa.build/app-bdx-host-qa/yibpoc/",
    email: "shridhara.ramaswamy@yokogawa.com",
    password: "June@2029",
  
    hideXhr: true
  },

  compilerOptions: {
    types: ["cypress", "@4tw/cypress-drag-drop"]
  },

  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 0,
  },
});
