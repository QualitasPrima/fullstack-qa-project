import { StudentData } from "..";

export class PracticeFormPage {
  // Navigate to the practice form page
  navigate() {
    cy.visit("/automation-practice-form");
  }

  // Enter first name into input field
  enterFirstName(firstName: string) {
    cy.get("#firstName").type(firstName);
  }

  // Enter last name into input field
  enterLastName(lastName: string) {
    cy.get("#lastName").type(lastName);
  }

  // Enter email address into input field
  enterEmail(email: string) {
    cy.get("#userEmail").type(email);
  }

  // Select gender radio button by visible label text
  selectGender(gender: string) {
    cy.get("label").contains(gender).click();
  }

  // Enter mobile number into input field
  enterMobileNumber(mobile: string) {
    cy.get("#userNumber").type(mobile);
  }

  /**
   * Select date of birth using the date picker widget
   * @param dob - Date string in 'YYYY-MM-DD' format
   */
  selectDateOfBirth(dob: string) {
    const [year, month, day] = dob.split("-");

    // Open the date picker
    cy.get("#dateOfBirthInput").click();

    // Select year from dropdown
    cy.get(".react-datepicker__year-select").select(year);

    // Select month from dropdown (0-based index for months)
    cy.get(".react-datepicker__month-select").select((+month - 1).toString());

    // Click on the day, ignoring days outside current month
    cy.contains(
      ".react-datepicker__day:not(.react-datepicker__day--outside-month)",
      parseInt(day)
    ).click();
  }

  // Select multiple subjects by typing and pressing enter for each
  selectSubjects(subjects: string[]) {
    subjects.forEach((subject) => {
      cy.get("#subjectsInput").type(subject + "{enter}");
    });
  }

  // Select multiple hobbies by clicking corresponding labels
  selectHobbies(hobbies: string[]) {
    hobbies.forEach((hobby) => {
      cy.get("label").contains(hobby).click();
    });
  }

  // Upload a picture file from the fixtures folder
  uploadPicture(fileName: string) {
    cy.get("#uploadPicture").selectFile(`cypress/fixtures/${fileName}`);
  }

  // Enter current address into the textarea field
  enterCurrentAddress(address: string) {
    cy.get("#currentAddress").type(address);
  }

  /**
   * Helper method to select an option from a dropdown
   * @param selector - CSS selector for dropdown container
   * @param optionText - Visible text of the option to select
   */
  selectDropdown(selector: string, optionText: string) {
    cy.get(selector).click();
    cy.get(".css-26l3qy-menu").contains(optionText).click({ force: true });
  }

  // Select state using dropdown helper
  selectState(state: string) {
    this.selectDropdown("#state", state);
  }

  // Select city using dropdown helper
  selectCity(city: string) {
    this.selectDropdown("#city", city);
  }

  // Click the submit button to submit the form
  submitForm() {
    cy.get("#submit").click({ force: true });
  }

  // Verify the submission modal header text is correct
  verifySubmissionModal() {
    cy.get("#example-modal-sizes-title-lg").should(
      "contain",
      "Thanks for submitting the form"
    );
  }

  /**
   * Verify that all submitted data matches expected values displayed in modal table
   * Formats the date of birth to match modal display format: "01 January,1984"
   * @param data - The StudentData object used to fill the form
   */
  verifySubmittedData(data: StudentData) {
    // Split the ISO dob string and map numeric month to full month name
    const [year, month, day] = data.dob.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Format date as displayed in modal (e.g. "01 January,1984")
    const formattedDob = `${parseInt(day)} ${
      months[parseInt(month) - 1]
    },${year}`;

    cy.get("table").within(() => {
      cy.contains("td", "Student Name")
        .next()
        .should("contain", `${data.firstName} ${data.lastName}`);
      cy.contains("td", "Student Email").next().should("contain", data.email);
      cy.contains("td", "Gender").next().should("contain", data.gender);
      cy.contains("td", "Mobile").next().should("contain", data.mobile);
      cy.contains("td", "Date of Birth")
        .next("td")
        .should("contain", formattedDob);
      cy.contains("td", "Subjects")
        .next()
        .should("contain", data.subjects.join(", "));
      cy.contains("td", "Hobbies")
        .next()
        .should("contain", data.hobbies.join(", "));
      cy.contains("td", "Picture").next().should("contain", data.picture);
      cy.contains("td", "Address").next().should("contain", data.address);
      cy.contains("td", "State and City")
        .next()
        .should("contain", `${data.state} ${data.city}`);
    });
  }

  // Close the submission modal by clicking the close button
  closeModal() {
    cy.get("#closeLargeModal").click({ force: true });
  }
}
