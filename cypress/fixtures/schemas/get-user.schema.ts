export const userSchema = {
  type: "object",
  required: ["id", "email", "first_name", "last_name", "avatar"],
  properties: {
    id: { type: "number" },
    email: { type: "string", format: "email" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    avatar: { type: "string", format: "uri" },
  },
};
