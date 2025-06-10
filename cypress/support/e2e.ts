import "./commands";

// Handle uncaught exceptions to avoid test failures from known non-critical errors
Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore cross-origin script errors (commonly harmless)
  if (err.message.includes("Script error")) {
    return false; // prevents Cypress from failing the test
  }
  // Otherwise, allow the error to fail the test
});
