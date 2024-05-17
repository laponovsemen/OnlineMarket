import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {

        },
        baseUrl: "http://localhost:3000",
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
    },

    "component": {
        "devServer": {
            "framework": "react",
            "bundler": "webpack"
        }
    }
});
