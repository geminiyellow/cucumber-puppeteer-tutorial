const { When } = require('cucumber');

const clickElement = require('../support/action/clickElement');
const deleteCookie = require('../support/action/deleteCookie');
const openUrl = require('../support/action/openUrl');
const setElementValue = require('../support/action/setElementValue');
const waitFor = require('../support/action/waitFor');
const waitForSelector = require('../support/action/waitForSelector');

When(
    'I click the element/button/link {string}', async function (selector) {
        await clickElement.call(this, selector, null);
    }
);

When(
    'I click the element/button/link {string} and wait for the element {string}', async function (selector, waitForSelector) {
        await clickElement.call(this, selector, waitForSelector);
    }
);

When(
    'I delete the cookie {string-env}',
    deleteCookie
);

When(
    /^I open the url "([^"]*)"$/, async function (url) {
        await openUrl.call(this, url);
    }
);

When(
    /^I open the url "([^"]*)" with user agent "([^"]*)"$/, async function (url, userAgent) {
        await openUrl.call(this, url, userAgent);
    }
);

When(
    /^I open the url "([^"]*)" with device "([^"]*)"$/, async function (url, device) {
        await openUrl.call(this, url, null, device);
    }
);

When(
    'I set the element/input/select/textarea {string} value to {string-env}',
    setElementValue
);

When(
    'I wait for {float} second(s)',
    waitFor
);

When(
    'I wait for {int} second(s)',
    waitFor
);

When(
    'I wait for element {string}', async function (selector) {
        await waitForSelector.call(this, selector, null);
    }
);

When(
    'I wait for element {string} for {int} seconds', async function (selector, seconds) {
        await waitForSelector.call(this, selector, seconds);
    }
);

When(
    'I wait for element {string} for {float} seconds', async function (selector, seconds) {
        await waitForSelector.call(this, selector, seconds);
    }
);
