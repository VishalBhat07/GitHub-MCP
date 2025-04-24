import { z } from "zod";
import { updateUserProfile } from "../controllers/userManipulation.js";

export default {
  name: "update-user-profile",
  schema: {
    name: z.string().optional().describe("New name for the user"),
    bio: z.string().optional().describe("User bio"),
    blog: z.string().optional().describe("URL to user blog"),
  },
  handler: async (updates) => {
    const user = await updateUserProfile(updates);
    return {
      content: [
        { type: "text", text: `User profile updated for: ${user.login}` },
      ],
    };
  },
};
