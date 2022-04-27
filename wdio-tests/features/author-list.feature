Feature: Check that the author list displays authors
  As a user I want to a see a list of authors when I visit the start page in which Joelle Bowditch should always be included.

  Scenario: At least 5 authors should be displayed
    Given that I am on the start page
    Then a list of at least 5 authors should be displayed

  Scenario: Every author description should be of a certain word length
    Given that I am on the start page
    Then every displayed author should have a description of at least 2 words

  Scenario: Joelle Bowditch should be displayed
    Given that I am on the start page
    Then the author "Joelle Bowditch" must be in the list