export const updateUserSchema = {
  title: "Update User Schema",
  type: "object",
  required: ["name", "job", "updatedAt"],
  properties: {
    name: { type: "string" },
    job: { type: "string" },
    updatedAt: { type: "string", format: "date-time" },
  },
};
