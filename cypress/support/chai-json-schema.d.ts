/// <reference types="chai" />

declare namespace Chai {
  interface Assertion {
    /**
     * Validates that the target object matches the given JSON Schema.
     * @param schema A valid JSON Schema object to validate against.
     */
    jsonSchema(schema: Record<string, any>): Assertion;
  }
}
