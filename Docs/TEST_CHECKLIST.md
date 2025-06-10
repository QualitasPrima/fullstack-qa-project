# Test Case Checklist: DemoQA Automation Practice Form

## 1. Objective
The objective of this checklist is to comprehensively verify the functionality, usability, and accessibility of the student registration form, ensuring a robust and high-quality user experience.

## 2. Scope of Testing

**In Scope:** Functional, Usability, Accessibility, and Responsiveness testing of all front-end form elements. This includes validation, UI behavior, and cross-browser compatibility checks.

**Out of Scope:** Formal backend testing (e.g., database validation), performance/load testing, and security penetration testing. These are noted as further considerations.

## 3. Test Approach

The approach involves breaking down the form into logical components. For each component, a mix of positive, negative, and boundary test cases have been designed.

This document serves as a high-level test checklist and is intended to be the initial base for testing activities. Each item represents a test scenario that would be further expanded or "fleshed out" into a detailed, step-by-step test case via a formal test management tool prior to execution.

---

## Priority Definitions

The priority of each test case is defined as follows:

-   **High:** Critical functionality that must work. A failure here would be a major blocker.
-   **Medium:** Important functionality that should work. A failure here represents a significant defect.
-   **Low:** Minor functionality or an edge case. A failure here has a lower impact on the user experience.

---

## Functional Test Checklist

This checklist is organized by the form's UI components for clarity and systematic execution.

### 1. Student Information Fields

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Submit the form with all valid required fields (First Name, Last Name, Gender, Mobile). | Positive |
| **High** | Attempt to submit with required fields left empty. | Negative |
| **High** | Enter an invalid email format (e.g., `test@test`, `test.com`). | Negative |
| **Medium** | Enter boundary length values for name fields (e.g., 1 character, 255 characters). | Edge / Boundary |
| **Medium** | Submit the form without an email address (as it is not required). | Positive |
| **Low** | Enter names containing hyphens or spaces (e.g., "Tommy-Lee O'Tester"). | Positive |

### 2. Gender Selection

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Select each gender option ("Male", "Female", "Other") and confirm it can be selected. | Positive |
| **High** | Attempt to submit the form without selecting a gender. | Negative |
| **Medium** | Verify that selecting a new gender option deselects the previous one. | Positive |

### 3. Mobile Number

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Enter a valid 10-digit mobile number. | Positive |
| **High** | Enter a mobile number with fewer than 10 digits. | Negative |
| **Medium** | Enter a mobile number with more than 10 digits. | Negative |
| **Medium** | Enter alphabetic or special characters in the mobile number field. | Negative |

### 4. Date of Birth

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **Medium** | Select a valid date using the date picker, including changing month and year. | Positive |
| **Low** | Submit the form without entering a Date of Birth (as it is optional). | Positive |
| **Low** | Select a date in the future to check for validation. | Edge / Boundary |

### 5. Subjects Field

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Enter a partial name and select a valid subject from the auto-complete list. | Positive |
| **Medium** | Select multiple valid subjects. | Positive |
| **Medium** | Remove a selected subject by clicking the 'x' icon. | Positive |
| **Medium** | Attempt to enter a subject that does not exist in the list. | Negative |
| **Low** | Add a large number of subjects to test UI layout and data handling. | Edge / Boundary |

### 6. Hobbies Checkboxes

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **Medium** | Select a single hobby and confirm it is checked. | Positive |
| **Medium** | Select all available hobbies simultaneously. | Positive |
| **Medium** | Select and then deselect a hobby to confirm toggle functionality. | Positive |
| **Low** | Submit the form without selecting any hobby (as it is optional). | Positive |

### 7. Picture Upload

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Upload a valid image file type (e.g., `.jpg`, `.png`). | Positive |
| **Medium** | Attempt to upload an invalid file type (e.g., `.pdf`, `.txt`). | Negative |
| **Medium** | Attempt to upload a file exceeding a reasonable size limit (e.g., >5MB). | Edge / Boundary |
| **Low** | Attempt to upload a 0KB file. | Edge / Boundary |

### 8. Address & Location

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Select a State and verify the City dropdown becomes enabled and populated. | Positive |
| **High** | Select a valid State and City combination from the dropdowns. | Positive |
| **Medium** | Enter a standard multi-line address in the "Current Address" field. | Positive |
| **Medium** | Change the selected State and verify the City dropdown list updates correctly. | Positive |

### 9. Form Submission

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | On successful submission, verify the confirmation modal appears. | Positive |
| **High** | Verify the data displayed in the modal accurately matches all submitted information. | Positive |
| **High** | Verify clicking the "Close" button on the modal closes it and resets the form. | Positive |

---

## Accessibility Checklist

This checklist ensures the form is usable by people with disabilities, following WCAG standards.

| Priority | Test Case Description | Rationale / WCAG Guideline |
| :--- | :--- | :--- |
| **High** | Navigate and operate every form element using only the keyboard (`Tab`, `Shift+Tab`, `Space`, `Enter`). | 2.1.1 Keyboard |
| **High** | Verify the keyboard focus order is logical and moves sequentially through the form. | 2.4.3 Focus Order |
| **High** | Confirm that all focused elements have a highly visible focus indicator (outline). | 2.4.7 Focus Visible |
| **Medium** | Check that all input fields have correctly associated `<label>` tags for screen readers. | 3.3.2 Labels or Instructions |
| **Medium** | Trigger a validation error and confirm it is announced to screen readers and is easy to identify. | 3.3.1 Error Identification |

---

## Non-Functional Test Checklist

### Responsiveness

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Verify the form layout is clean and usable on a standard **desktop viewport** (e.g., 1920px width). | Layout |
| **High** | Verify the form layout is clean and usable on a **mobile viewport** (e.g., 375px width). | Layout |
| **Medium** | Verify the form adapts correctly to a **tablet viewport** (e.g., 768px width). | Layout |
| **Low** | Change screen **orientation** from portrait to landscape on mobile/tablet and ensure layout remains intact. | Layout |

### Cross-Browser Compatibility

| Priority | Test Case Description | Test Type |
| :--- | :--- | :--- |
| **High** | Execute all P1 test cases on the latest version of Google Chrome. | Compatibility |
| **High** | Execute all P1 test cases on the latest version of Mozilla Firefox. | Compatibility |
| **Medium** | Execute key P1 test cases on the latest version of Safari and/or Microsoft Edge. | Compatibility |

---

## Further Test Considerations

While the checklists above are comprehensive for this assignment, a full production test plan would also scope for the following activities:

**Security Testing:** To ensure the form is not vulnerable to common attacks like Cross-Site Scripting (XSS) or insecure data submission, a series of basic penetration tests would be planned.

**Performance Testing:** To verify application stability, formal tests would measure page load time, form submission speed under normal conditions, and system behaviour under high load (stress testing).

**Formal Usability Testing:** To gather qualitative feedback on the user journey, sessions would be conducted with target users to identify any points of confusion, hesitation, or design friction.
