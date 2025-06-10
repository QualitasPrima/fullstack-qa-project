/// <reference types="cypress" />

/**
 * Interface representing the structure of student form data.
 * This is used for typing the data object passed into custom Cypress commands.
 */
export interface StudentData {
  firstName: string; // Student's first name
  lastName: string; // Student's last name
  email: string; // Student's email address
  gender: string; // Gender (e.g., "Male", "Female", etc.)
  mobile: string; // Mobile number
  dob: string; // Date of birth in 'YYYY-MM-DD' format
  subjects: string[]; // List of subjects (e.g., ["Maths", "English"])
  hobbies: string[]; // List of hobbies (e.g., ["Sports", "Music"])
  picture: string; // Filename of picture in fixtures directory
  address: string; // Current address
  state: string; // State selection
  city: string; // City selection
}

// Extend Cypress's Chainable interface to include custom commands
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to fill the practice form using student data.
       * @param data - The student data object
       */
      fillPracticeForm(data: StudentData): Chainable<Subject>;

      /**
       * Custom command to submit the form and verify submission modal and submitted data.
       * @param data - The student data object
       */
      submitAndVerify(data: StudentData): Chainable<Subject>;

      /**
       * Custom API request command with automatic API key header.
       * @param method HTTP method ("GET", "POST", "PUT", "DELETE")
       * @param endpoint API endpoint (relative path)
       * @param body Optional request payload
       */
      api(method: string, endpoint: string, body?: object): Chainable<any>;
    }
  }
}

export {}; // Ensures this file is treated as a module
