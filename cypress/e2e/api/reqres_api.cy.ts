/// <reference types="cypress" />

// Import JSON Schemas for validating API responses
import { userSchema } from "../../fixtures/schemas/get-user.schema";
import { getUsersSchema } from "../../fixtures/schemas/get-users.schema";
import { createUserSchema } from "../../fixtures/schemas/create-user.schema";
import { updateUserSchema } from "../../fixtures/schemas/update-user.schema";

describe("ReqRes API - User Endpoints", () => {
  /**
   * Test: GET /users
   * Verifies fetching a list of users returns status 200
   * and the response body matches the expected JSON schema.
   */
  it("GET /users - should fetch list of users and match schema", () => {
    cy.api("GET", "/users?page=2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data").and.be.an("array");
      expect(response.body).to.have.property("page", 2);
      expect(response.body).to.be.jsonSchema(getUsersSchema);
    });
  });

  /**
   * Test: GET /users/:id
   * Verifies fetching a single user by ID returns status 200
   * and response data matches the expected user schema.
   */
  it("GET /users/:id - should fetch single user and match schema", () => {
    cy.api("GET", "/users/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.jsonSchema(userSchema);
    });
  });

  /**
   * Test: POST /users
   * Creates a new user with name and job fields
   * Verifies status 201 and response matches the create user schema.
   */
  it("POST /users - should create a user and match schema", () => {
    const newUser = {
      name: "Test User",
      job: "QA Engineer",
    };

    cy.api("POST", "/users", newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include.keys("name", "job", "id", "createdAt");
      expect(response.body).to.be.jsonSchema(createUserSchema);
    });
  });

  /**
   * Test: PUT /users/:id
   * Updates an existing user's name and job fields
   * Verifies status 200 and response matches the update user schema.
   */
  it("PUT /users/:id - should update a user and match schema", () => {
    const updatedUser = {
      name: "Test User",
      job: "Senior QA Engineer",
    };

    cy.api("PUT", "/users/2", updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include.keys("name", "job", "updatedAt");
      expect(response.body).to.be.jsonSchema(updateUserSchema);
    });
  });

  /**
   * Test: DELETE /users/:id
   * Deletes a user by ID
   * Verifies status 204 and confirms the response body is empty or undefined.
   */
  it("DELETE /users/:id - should delete a user successfully", () => {
    cy.api("DELETE", "/users/2").then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body === undefined || response.body === "").to.be.true;
    });
  });
});
