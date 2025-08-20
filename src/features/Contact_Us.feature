Feature: WebdriverUniversity.com - Contact Us Page
  # Scenario: Valid Contact Us Form Submission
  #   Given I navigate to the webdriveruniversity homepage
  #   When I click on the contact us button
  #   And I switch to the new browser tab
  #   And I type a first name
  #   And I type a last name
  #   And I enter an email
  #   And I type a comment
  #   And I click on the submit button
  #   Then I should be presented with a successful contact us submission message

  # Scenario: Invalid Contact Us Form Submission
  #   Given I navigate to the webdriveruniversity homepage
  #   When I click on the contact us button
  #   And I switch to the new browser tab
  #   And I type a first name
  #   And I type a last name
  #   #And I enter an email
  #   And I type a comment
  #   And I click on the submit button
  #   Then I should be presented with an unsuccessful contact us message

  # Scenario: Valid Contact Us Form Submission - Using Specific Data
  #   Given I navigate to the webdriveruniversity homepage
  #   When I click on the contact us button
  #   And I switch to the new browser tab
  #   And I type a specific first name "Sarah"
  #   And I type a specific last name "Woods"
  #   And I enter a specific email address "sarah_woods@example.com"
  #   And I type a specific text "Hello world" and a number 2 within the comment input field
  #   And I click on the submit button
  #   Then I should be presented with a successful contact us submission message

  # Scenario: Contact Us Form Submission - Using Random Data
  #   Given I navigate to the webdriveruniversity homepage
  #   When I click on the contact us button
  #   And I switch to the new browser tab
  #   And I type a random first name
  #   And I type a random last name
  #   And I enter a random email
  #   And I type a comment
  #   And I click on the submit button
  #   Then I should be presented with a successful contact us submission message

  Scenario: Validate Contact Us Page
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I switch to the new browser tab
    And I type a first name <firstName> and a last name <lastName>
    And I type an email address '<emailAddress>' and a comment '<comment>'
    And I click on the submit button
    Then I should be presented with a header text '<message>'

    Examples:
      | firstName | lastName | emailAddress           | comment                 | message                     |
      | John      | Jones    | john_jones@example.com | Hello World!            | Thank You for your Message! |
      | Mia       | Carter   | mia_carter@sol.com     | This is a test comment  | Thank You for your Message! |
      | Grace     | Hudson   | grace_hudson           | Do you create websites? | Invalid email address       |