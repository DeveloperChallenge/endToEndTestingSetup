exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    Capabilities: {
        'BoowserName': 'chrome'
    },
    specs: ['app.test.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};