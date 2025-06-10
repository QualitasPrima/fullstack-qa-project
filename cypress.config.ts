import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {},
  },
});
