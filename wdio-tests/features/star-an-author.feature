Feature: Star an author
  As user I want to click an author name to star/mark the author as a favorite. And click an already starred author to remove my favorite marking.

  Scenario: Add a star
    Given that I am on the start page
    When I click an author that does not have a star
    Then the author should get a star

  Scenario: Remove a star
    Given that I am on the start page
    When I click an author that has a star
    Then the author should get his star removed

