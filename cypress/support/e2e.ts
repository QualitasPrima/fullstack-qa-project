import "./commands";
import chaiJsonSchema from "chai-json-schema";

// Register chai-json-schema plugin globally for JSON schema assertions
chai.use(chaiJsonSchema);

// Handle uncaught exceptions to avoid test failures from known non-critical errors
Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore cross-origin script errors (commonly harmless)
  if (err.message.includes("Script error")) {
    return false; // prevents Cypress from failing the test
  }
  // Otherwise, allow the error to fail the test
});
