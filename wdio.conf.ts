import * as path from 'path';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './test/tsconfig.json',
    port: 4723,

    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],

    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '16',
        'appium:app': path.join(process.cwd(), './apps/Android-MyDemoAppRN.1.3.0.build-244.apk'),
        'appium:appPackage': 'com.saucelabs.mydemoapp.rn',
        'appium:appActivity': '.MainActivity',
        'appium:newCommandTimeout': 3600,
        'appium:noReset': false,
    }],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (_test, _context, { passed }) {
        if (!passed) {
            await driver.takeScreenshot();
        }
    }
}