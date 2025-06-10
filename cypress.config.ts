import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {},
  },
  env: {
    reqresApiKey: "reqres-free-v1",
    reqresBaseUrl: "https://reqres.in/api",
  },
});
