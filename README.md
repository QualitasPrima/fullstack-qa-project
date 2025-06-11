> **Note:** This project was completed as a home assignment for the QA Engineer role at Loady GmbH on 11th June, 2025.

# Fullstack QA Project: E2E & API Testing

## 🚀 Project Objective

The goal of this project is to showcase a professional, scalable, and maintainable approach to software testing, fulfilling all requirements of the home assignment:

1. **Test Checklist** – A detailed manual test checklist for [DemoQA Practice Form](https://demoqa.com/automation-practice-form)
2. **Bug Report** – A detailed, actionable bug report in a Jira-style format
3. **Test Automation:** An advanced automation suite using Cypress, featuring both E2E UI tests for the DemoQA form and a separate suite of API tests for the `reqres.in` API.

---

## ✨ Key Skills Demonstrated

This project showcases a deep, multi-faceted understanding of modern quality assurance, including:

- **Test Strategy & Planning:** Demonstrating initiative by designing a comprehensive test strategy that covers multiple application layers (UI and API) to ensure full-stack quality.

- **Manual Test Case Design:** Creating a detailed and prioritised test checklist that covers a wide range of scenarios including positive, negative, boundary, usability, responsiveness and accessiblity tests.

- **Bug Reporting & Analysis:** Authoring clear, concise, and actionable bug report in a professional Jira-like format that enables efficient reproduction and resolution.

- **Advanced Test Automation (Cypress & TypeScript):**

  - **Full-Stack Testing:** Proactively choosing to write tests in **TypeScript** for both front-end **E2E UI** interactions and back-end **API endpoint** validation (GET, POST, etc.).
  - **API Schema Validation:** Ensuring the structural integrity and correctness of API responses by validating them against predefined schemas (a potential enhancement).

- **Automation Architecture & Best Practices:** Building a **modular, maintainable, and scalable framework** by implementing:

  - The **Page Object Model (POM)** to separate UI selectors and logic from test scripts.
  - **Reusable Custom Commands** to promote **DRY (Don't Repeat Yourself)** code and significantly improve test readability and maintenance.
  - **Data-Driven Testing** using Cypress fixtures to decouple test data from test logic.

- **Professional Documentation & Version Control:** Creating a well-organized project structure on GitHub with clear documentation (`README`, test case reference, test checklist, bug report) and a descriptive commit history.

---

## 🛠️ Tech Stack & Tools

| Category       | Tools Used             |
| -------------- | ---------------------- |
| Automation     | Cypress + TypeScript   |
| API Validation | Chai JSON Schema       |
| Source Control | Git & GitHub           |
| Runtime        | Node.js (via npm)      |
| Documentation  | Markdown (`.md` files) |

---

## 📂 Project Structure

```
├── cypress/                      # Cypress E2E & API test suite
│   ├── e2e/
│   │   ├── api/
│   │   │   └── reqres_api.cy.ts       # API tests using ReqRes
│   │   └── ui/
│   │       └── form_submission.cy.ts     # UI automation for DemoQA Practice Form
│   ├── fixtures/
│   │   ├── schemas/                  # JSON Schema definitions (as .ts)
│   │   │   ├── create-user.schema.ts
│   │   │   ├── get-user.schema.ts
│   │   │   ├── get-users.schema.ts
│   │   │   └── update-user.schema.ts
│   │   ├── studentData.json          # Form test data
│   │   └── test-image.png            # Sample image upload
│   ├── support/
│   │   ├── pageObjects/
│   │   │   └── PracticeFormPage.ts   # Page Object Model for form
│   │   ├── chai-json-schema.d.ts     # Type support for schema validation
│   │   ├── commands.ts               # Custom Cypress commands
│   │   ├── e2e.ts                    # Cypress support entry point
│   │   └── index.d.ts                # Custom TypeScript definitions
│   └── README.md                     # In-depth guide for the automation framework
│
├── docs/                             # Project documentation (outside Cypress)
│   ├── BUG_REPORT.md                 # Task 2 - Identified bug report
│   ├── DQA-TC-001.md                 # Manual testcase maps to e2e test
│   └── TEST_CHECKLIST.md             # Task 1 - Test coverage checklist
│
├── .gitignore                        # Git ignored files
├── cypress.config.ts                 # Cypress configuration
├── LICENSE                           # License file
├── package-lock.json                 # Dependency lockfile
├── package.json                      # Project dependencies and scripts
├── README.md                         # Project overview and instructions
└── tsconfig.json                     # TypeScript configuration
```

---

## ⚙️ Setup & Test Execution

### ✅ Prerequisites

- [Node.js](https://nodejs.org/en/) (LTS version)
- [Git](https://git-scm.com/downloads)

### 📦 Install & Run

```bash
# Clone the repository

git clone https://github.com/QualitasPrima/fullstack-qa-project.git

cd fullstack-qa-project

# Install project dependencies

npm install
```

### ▶️ Running the Tests

```bash
# Launch Cypress Test Runner (GUI mode)

npx cypress open

# Run all tests in terminal (headless mode)

npx cypress run

# Run only UI tests

npx cypress run --spec "cypress/e2e/ui/**/*.cy.ts"

# Run only API tests

npx cypress run --spec "cypress/e2e/api/**/*.cy.ts"
```

---

## 📄 Assignment Deliverables

- ✅ **Task 1:** [Manual Test Checklist](./docs/TEST_CHECKLIST.md)
- 🐞 **Task 2:** [Bug Report](./docs/BUG_REPORT.md)
- 🤖 **Task 3: Test Automation**
  - [UI Test Script](./cypress/e2e/ui/form_submission.cy.ts)
  - [API Test Script](./cypress/e2e/api/reqres_api.cy.ts)
  - [Manual Test Case (DQA-TC-001)](./docs/DQA-TC-001.md)

---

## ⚖️ License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
