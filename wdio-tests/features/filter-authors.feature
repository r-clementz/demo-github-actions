Feature: Filter authors on start page by name
  As user I want to able to filter out authors I am interested in on the start page by filling part of name in the filter input

  Scenario: The filter should work as expected
    Given that I am on the start page
    When I enter the text "ma" in the filter
    Then the only authors displayed should be "Mariquilla Di Boldi, Shelia Major, Cello Le Marchant, Ced Matissoff"
