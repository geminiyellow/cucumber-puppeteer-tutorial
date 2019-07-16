Feature: checkTitle
    In order write BDD tests
    As a developer
    I want check the page's title

    Scenario: access from desktop browser
        When I open the url "https://delima.line.me"
        And I wait for element "#vue-app"
        Then I expect the page title contains "LINE"
