@regression @login
Feature: Webdriveruniversity - Login Page

  #Background: Pre-conditions
  #  Given I navigate to the webdriveruniversity homepage
  #  When I click on the login portal button
  #  And I switch to the new browser tab

  Scenario Outline: Validate valid & invalid login
    Given I navigate to the webdriveruniversity login page

    And I type a username <username>
    And I type a password <password>
    And I wait for 2 seconds
    And I click on the login button
    Then I should be presented with an alert box which contains text '<expectedAlertText>'

    Examples:
      | username  | password     | expectedAlertText    |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | password123  | validation failed    |

    @smoke @ignore
    Examples:
      | username  | password     | expectedAlertText    |
      | webdriver | webdriver123 | validation succeeded |
