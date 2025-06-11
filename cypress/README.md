# Cypress Automation – DemoQA + ReqRes API

This project is an automated **end-to-end (E2E)** test suite for the **Practice Form** on [DemoQA](https://demoqa.com/automation-practice-form), and a **REST API test suite** for [`reqres.in`](https://reqres.in), built using [Cypress](https://www.cypress.io/). It follows a modular, maintainable structure using:

- ✅ **Page Object Model (POM)**
- ✅ **Custom commands**
- ✅ **Data-driven tests** via fixtures
- ✅ **JSON schema validation** for API responses
- ✅ **TypeScript** for safety and maintainability

---

## 📂 Project Structure

```text
cypress/
├── e2e/
│   ├── api/
│   │   └── reqres_api.cy.ts
│   └── ui/
│       └── form-submission.cy.ts
│
├── fixtures/
│   ├── schemas/
│   │   ├── create-user.schema.ts
│   │   ├── get-user.schema.ts
│   │   ├── get-users.schema.ts
│   │   └── update-user.schema.ts
│   ├── studentData.json
│   └── test-image.png
│
├── support/
│   ├── pageObjects/
│   │   └── PracticeFormPage.ts
│   ├── chai-json-schema.d.ts
│   ├── commands.ts
│   ├── e2e.ts
│   └── index.d.ts
│
└── README.md

---

```

## 🔬 Test Coverage

### 🧪 UI: `form_submission.cy.ts`

- Fills out the full form using fixture data
- Uploads an image
- Submits the form
- Asserts the confirmation modal reflects correct input

### 🧪 API: `reqres_api.cy.ts`

Covers full **CRUD** lifecycle:

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/users/2`      | Fetch single user   |
| GET    | `/users?page=2` | Fetch list of users |
| POST   | `/users`        | Create a user       |
| PUT    | `/users/2`      | Update user details |
| DELETE | `/users/2`      | Delete a user       |

✅ All responses are validated against TypeScript-based JSON schemas.

---

### 🤔 Why Cypress for API Testing?

While tools like Postman are excellent for exploratory API testing and manual validation, integrating the API tests directly into the Cypress framework for this project offered several key advantages:

- **Unified Framework:** It allows both UI and API tests to live in the same project, be written in the same language (TypeScript), and be executed by the same test runner. This simplifies the tech stack, setup, and maintenance.

- **Code & Data Sharing:** It creates the possibility to easily share configurations, helper functions, and data between UI and API tests. For example, one could create a user via an API call and then immediately use those credentials in a UI login test.

- **Simplified CI/CD:** A single command (`npx cypress run`) can execute the entire test suite (both UI and API), streamlining the process for continuous integration pipelines.

---

## 🚀 Run the Tests

```bash
# Open Cypress Test Runner for interactive testing
npx cypress open

# Run all tests headlessly in the terminal
npx cypress run

# Run UI tests only
npx cypress run --spec "cypress/e2e/ui/**/*.cy.ts"

# Run API tests only
npx cypress run --spec "cypress/e2e/api/**/*.cy.ts"
```

---

## 🔧 Custom Commands

Defined in `cypress/support/commands.ts`:

### **UI Commands**

```ts
cy.fillPracticeForm(studentData);
cy.submitAndVerify(studentData);
```

### **API Command**

```ts
cy.api({
  method: "GET",
  url: "/users/2",
  headers: {
    "x-api-key": Cypress.env("reqresApiKey"),
  },
});

> `cy.api()` is a custom wrapper for `cy.request()` that automatically includes the base URL, API key, and common headers to reduce repetition across API tests.
```

---

## 📁 Sample Test Data

Example contents of `studentData.json`:

```json
{
  "firstName": "Test",
  "lastName": "User1",
  "email": "testuser1@testexample.com",
  "gender": "Male",
  "mobile": "0123456789",
  "dob": "1984-01-01",
  "subjects": ["Computer Science", "Maths"],
  "hobbies": ["Sports", "Music"],
  "picture": "test-image.jpg",
  "address": "144 Teststrasse",
  "state": "Haryana",
  "city": "Panipat"
}
```

## 🧹 Test Cleanup Notes

> ⚠️ **No teardown steps are required in this project.**

- All **API tests** use [ReqRes](https://reqres.in), a **mock REST API**. It does not persist any data between requests—`POST`, `PUT`, and `DELETE` calls are simulated and do not affect subsequent tests.
- All **UI tests** target the [DemoQA Practice Form](https://demoqa.com/automation-practice-form), which displays the submitted data in a modal only and does **not send data to a backend server**.
- Because of this non-persistent behavior, there's no need for test teardown logic (e.g., record deletion, state reset, or DB cleanup).

This setup ensures that tests remain **stateless**, **repeatable**, and **safe to run continuously** without requiring cleanup.

---

## 📄 Manual Test Case Reference

A manually written test case corresponding to the automated UI test can be found here:

👉 [DQA-TC-001 – Valid Form Submission](../docs/DQA-TC-001.md)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](../LICENSE) file for details.
