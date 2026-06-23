function launchBrowser(browserName) {

    if (browserName === 'Chrome') {
        console.log(`${browserName} launched`);

    }
    else if (browserName === 'Edge') {
        console.log(`${browserName} launched`);

    }
    else if (browserName === 'Firefox') {
        console.log(`${browserName} launched`);

    }
    else {
        console.log(`${browserName} is not found`);

    }

}
launchBrowser('Chrome')
launchBrowser('Safari')

function runTests(testType) {
    switch (testType) {
        case 'Smoke':
            console.log(`${testType} testcases are being executed`);
            break;
        case 'Sanity':
            console.log(`${testType} testcases are being executed`);
            break;
        case 'Regression':
            console.log(`${testType} testcases are being executed`);
            break;
        default:
            console.log(`Smoke testcases are being executed`);
            break;
    }
}
runTests('Sanity')
runTests('Mobile')