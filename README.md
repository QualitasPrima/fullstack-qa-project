> **Note:** This project was completed as a home assignment for the QA Engineer role at Loady GmbH on June 10, 2025.

# Fullstack QA Project: E2E & API Testing

## 🚀 Project Objective
The goal of this project is to showcase a professional, scalable, and maintainable approach to software testing, fulfilling all requirements of the home assignment:
* **Task 1: Test Checklist:** A detailed manual test checklist for the DemoQA Practice Form.
* **Task 2: Bug Report:** A professionally formatted bug report for a given scenario.
* **Task 3: Test Automation:** An advanced automation suite using Cypress, featuring both E2E UI tests for the DemoQA form and a separate suite of API tests for the `reqres.in` API.

---

## ✨ Key Skills Demonstrated
This project showcases a deep, multi-faceted understanding of modern quality assurance, including:

* **Test Strategy & Planning:** Demonstrating initiative by designing a comprehensive test strategy that covers multiple application layers (UI and API) to ensure full-stack quality.

* **Manual Test Case Design:** Creating a detailed and prioritized test checklist that covers a wide range of scenarios including positive, negative, boundary, and usability tests.

* **Bug Reporting & Analysis:** Authoring clear, concise, and actionable bug reports in a professional Jira-like format that enables efficient reproduction and resolution.

* **Advanced Test Automation (Cypress & TypeScript):**
    * **Full-Stack Testing:** Proactively choosing to write tests in **TypeScript** for both front-end **E2E UI** interactions and back-end **API endpoint** validation (GET, POST, etc.).
    * **API Schema Validation:** Ensuring the structural integrity and correctness of API responses by validating them against predefined schemas (a potential enhancement).

* **Automation Architecture & Best Practices:** Building a **modular, maintainable, and scalable framework** by implementing:
    * The **Page Object Model (POM)** to separate UI selectors and logic from test scripts.
    * **Reusable Custom Commands** to promote **DRY (Don't Repeat Yourself)** code and significantly improve test readability and maintenance.
    * **Data-Driven Testing** using Cypress fixtures to decouple test data from test logic.

* **Professional Documentation & Version Control:** Creating a well-organized project structure on GitHub with clear documentation (`README`, Test Plans, Bug Reports) and an authentic, descriptive commit history.

---

## 🛠️ Tech Stack & Tools
* **Test Automation Framework:** Cypress
* **Language:** TypeScript
* **API Validation:** `chai` (bundled with Cypress)
* **Version Control:** Git & GitHub
* **Runtime Environment:** Node.js

---

## 📂 Project Structure
```text
/
├── cypress/                  # Contains the full E2E & API automation suite
│   ├── e2e/
│   │   ├── api/
│   │   │   └── reqres_api.cy.ts
│   │   └── ui/
│   │       └── form_submission.cy.ts
│   ├── fixtures/
│   │   └── test-image.jpg
│   └── ...
├── BUG_REPORT.md             # Deliverable for Task 2
├── TEST_CHECKLIST.md         # Deliverable for Task 1
├── README.md                 # This main project guide
└── package.json
```
---

## ⚙️ Setup & Test Execution

**Prerequisites:**
-   [Node.js](https://nodejs.org/en/) (LTS version)
-   [Git](https://git-scm.com/downloads)

1.  **Installation**
    ```bash
    # Clone the repository
    git clone [https://github.com/QualitasPrima/fullstack-qa-project.git](https://github.com/QualitasPrima/fullstack-qa-project.git)

    # Navigate into the project directory
    cd fullstack-qa-project

    # Install dependencies
    npm install
    ```

2.  **Running Tests**
    ```bash
    # Open the interactive Cypress Test Runner
    npx cypress open

    # Run all tests headlessly in the terminal (ideal for CI)
    npx cypress run

    # Run only the UI test suite
    npx cypress run --spec "cypress/e2e/ui/**/*.cy.ts"

    # Run only the API test suite
    npx cypress run --spec "cypress/e2e/api/**/*.cy.ts"
    ```

### 📄 Assignment Artifacts
Please find the detailed deliverables for each assignment task below:

**Task 1: [View the Full Test Case Checklist](./TEST_CHECKLIST.md)**

**Task 2: [View the Detailed Bug Report](./BUG_REPORT.md)**

**Task 3: View the Automation Code:**

* [E2E UI Test Script](./cypress/e2e/ui/form_submission.cy.ts)
* [API Test Script](./cypress/e2e/api/reqres_api.cy.ts)

## ⚖️ License
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
