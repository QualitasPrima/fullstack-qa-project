# 🐞 Bug Report: Form Submission Fails When Multiple Hobbies Are Selected

## Bug ID: DQA-BUG-001

## Summary
When a user selects two or more hobbies from the available checkboxes, the form submission fails without any visual feedback or error message, blocking the user from completing their intended action.

## Environment
* **Browser:** Chrome v125+, Firefox v126+
* **Operating System:** Windows 11, macOS Sonoma
* **Application URL:** `https://demoqa.com/automation-practice-form`
* **Date Found:** 8 June 2025

## Steps to Reproduce
1.  Navigate to the student registration form at the URL above.
2.  Fill in all mandatory fields with valid data (First Name, Last Name, Gender, Mobile).
3.  In the "Hobbies" section, check the box for "Sports".
4.  In the "Hobbies" section, check a second box, for "Reading".
5.  Scroll to the bottom of the form and click the "Submit" button.

## Expected Result
The form should submit successfully. A confirmation modal titled "Thanks for submitting the form" should appear, displaying all the submitted data, including the two selected hobbies (e.g., "Hobbies: Sports, Reading").

## Actual Result
The form does not submit. The page remains unchanged, the confirmation modal does not appear, and no error message is shown to the user. The submission fails silently.

## Severity
**High** - This is a significant functional defect that causes a complete failure of a user path. It blocks users from using the "Hobbies" feature as expected and prevents form submission under this common condition.

## Priority
**High** - Requires prompt attention. Although the field is optional, a prominently displayed feature that is fundamentally broken damages the application's credibility and user trust.

## Reproducibility
Consistently Reproducible (100% of the time)

## Screenshots/Attachments
* `[Placeholder for video/images showing the bug in action: multiple hobbies selected, submit button clicked, nothing happens]`
* `[Placeholder for Screenshot of browser console showing any JavaScript errors that appear upon clicking submit]`

## Reported by
David Jenkins
