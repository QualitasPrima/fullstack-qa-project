# Test Case: Successful Form Submission with All Fields

---

| Field            | Value                                 |
| :--------------- | :------------------------------------ |
| **Test Case ID** | DQA-TC-001                            |
| **Component**    | Form Submission, Student Registration |
| **Priority**     | **P1 (High)**                         |
| **Test Type**    | Positive, Functional, End-to-End      |
| **Status**       | Ready for Execution                   |

---

## Objective

To verify that a user can successfully submit the student registration form when **all available fields** are filled with valid data, and that the submitted data is accurately reflected in the confirmation modal.

## Preconditions

1.  The user is using a supported web browser (e.g., Chrome, Firefox).
2.  The user has successfully navigated to the practice form URL: `https://demoqa.com/automation-practice-form`.
3.  A sample image file (e.g., `test-image.jpg`) is available for upload.

## Test Data

| Field Name      | Test Value                             |
| :-------------- | :------------------------------------- |
| First Name      | `Test`                                 |
| Last Name       | `User1`                                |
| Email           | `testuser1@testexample.com`            |
| Gender          | `Male`                                 |
| Mobile          | `0123456789`                           |
| Date of Birth   | `1984-01-01`                           |
| Subjects        | `Computer Science", "Maths", "Physics` |
| Hobbies         | `Sports`, `Music`                      |
| Picture         | `profile.jpg`                          |
| Current Address | `144 Teststrasse, Testville, TS1 2CY`  |
| State           | `Haryana`                              |
| City            | `Panipat`                              |

---

## Test Steps

1.  Enter `User` into the **First Name** input field.
2.  Enter `Test1` into the **Last Name** input field.
3.  Enter `testuser1@testexample.com` into the **Email** input field.
4.  Select the **Male** radio button from the Gender options.
5.  Enter `0123456789` into the **Mobile** input field.
6.  Click the **Date of Birth** input to open the calendar widget.
7.  In the widget, select `1984` from the year dropdown and `Jan` from the month dropdown.
8.  Click on day `1` in the calendar.
9.  In the **Subjects** field, type `Co` and select `Computer Science` from the auto-complete list.
10. In the **Subjects** field, type `Ma` and select `Maths` from the auto-complete list.
11. In the **Subjects** field, type `Ph` and select `Physics` from the auto-complete list.
12. Check the **Sports** and **Music** checkboxes from the Hobbies options.
13. Click the "Choose file" button and upload the `profile.jpg` file.
14. Enter `144 Teststrasse, Testville, TS1 2CY` into the **Current Address** field.
15. Select `Haryana` from the **State** dropdown.
16. Select `Panipat` from the **City** dropdown.
17. Click the **Submit** button.

---

## Expected Result

1.  Upon clicking "Submit", a confirmation modal with the title "Thanks for submitting the form" must appear.
2.  The modal must display a table containing the exact data entered in the test steps. The following rows must be present and accurate:
    - `Student Name`: `Test User1`
    - `Student Email`: `testuser1@testexample.com`
    - `Gender`: `Male`
    - `Mobile`: `0123456789`
    - `Date of Birth`: `01 January,1984`
    - `Subjects`: `Computer Science, Maths, Physics`
    - `Hobbies`: `Sports, Music`
    - `Picture`: `profile.jpg`
    - `Address`: `144 Teststrasse, Testville, TS1 2CY`
    - `State and City`: `Haryana Panipat`

---

## Postconditions

1.  After clicking the "Close" button on the modal, the modal must disappear.
2.  All fields on the registration form should be cleared and reset to their initial state, ready for a new entry.
