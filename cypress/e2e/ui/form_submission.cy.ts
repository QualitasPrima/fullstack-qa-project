import { StudentData } from "../../support";

describe("Submit Student Registration Form", () => {
  let studentData: StudentData;

  // Load the fixture data once before all tests run
  before(() => {
    cy.fixture("studentData").then((data) => {
      studentData = data;
    });
  });

  // Visit the practice form page before each test
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });

  it("should submit successfully with all valid data", () => {
    // Use custom command to fill the form with loaded fixture data
    cy.fillPracticeForm(studentData);

    // Use custom command to submit the form and verify submission with the same data
    cy.submitAndVerify(studentData);
  });
});
