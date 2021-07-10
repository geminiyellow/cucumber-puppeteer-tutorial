const { Then } = require('cucumber');

const checkElementEnabled = require('../support/check/checkElementEnabled');
const checkTitle = require('../support/check/checkTitle');
const checkTitleContains = require("../support/check/checkTitleContains");

Then(
    /^I expect the element "([^"]*)?" is( not)? enabled$/,
    checkElementEnabled
);

Then(
    /^I expect that the title is "([^"]*)"$/,
    checkTitle
);

Then(
    /^I expect the page title (does not )?contains? "([^"]*)?"$/,
    checkTitleContains
);
