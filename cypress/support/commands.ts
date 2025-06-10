// Import the PracticeFormPage class from the page objects
import { PracticeFormPage } from "./pageObjects/PracticeFormPage";

// Create a reusable instance of the form page
const formPage = new PracticeFormPage();

/**
 * Custom Cypress command to fill out the entire form
 * using data provided from fixture file.
 */
Cypress.Commands.add("fillPracticeForm", (data) => {
  formPage.enterFirstName(data.firstName); // Enter first name
  formPage.enterLastName(data.lastName); // Enter last name
  formPage.enterEmail(data.email); // Enter email
  formPage.selectGender(data.gender); // Select gender by label
  formPage.enterMobileNumber(data.mobile); // Enter mobile number
  formPage.selectDateOfBirth(data.dob); // Select date of birth from picker
  formPage.selectSubjects(data.subjects); // Enter multiple subjects
  formPage.selectHobbies(data.hobbies); // Select multiple hobbies
  formPage.uploadPicture(data.picture); // Upload picture from fixtures
  formPage.enterCurrentAddress(data.address); // Enter address
  formPage.selectState(data.state); // Select state from dropdown
  formPage.selectCity(data.city); // Select city based on selected state
});

/**
 * Custom Cypress command to submit the form
 * and verify both the modal and the submitted data.
 */
Cypress.Commands.add("submitAndVerify", (data) => {
  formPage.submitForm(); // Click the submit button
  formPage.verifySubmissionModal(); // Verify the modal title appears
  formPage.verifySubmittedData(data); // Verify that data in the modal matches input
  formPage.closeModal(); // Close the confirmation modal
});

/**
 * Custom Cypress command to perform an API request to the ReqRes API.
 * This wraps cy.request() and auto-includes:
 * - the base API URL from Cypress env (`reqresBaseUrl`)
 * - an optional API key header (`reqresApiKey`)
 *
 * @param method - HTTP method ("GET", "POST", "PUT", "DELETE")
 * @param endpoint - API endpoint path (e.g., "/users/2")
 * @param body - Optional request body (for POST/PUT)
 */
Cypress.Commands.add("api", (method, endpoint, body = null) => {
  const baseUrl = Cypress.env("reqresBaseUrl") || "";
  const url = `${baseUrl}${endpoint}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const apiKey = Cypress.env("reqresApiKey");
  if (apiKey) {
    headers["x-api-key"] = apiKey;
  }

  return cy.request({
    method,
    url,
    body,
    headers,
    failOnStatusCode: false,
  });
});
