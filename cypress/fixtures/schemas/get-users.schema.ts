import { userSchema } from "./get-user.schema";

export const getUsersSchema = {
  type: "object",
  required: ["page", "per_page", "total", "total_pages", "data"],
  properties: {
    page: { type: "number" },
    per_page: { type: "number" },
    total: { type: "number" },
    total_pages: { type: "number" },
    data: {
      type: "array",
      items: userSchema,
    },
  },
};
