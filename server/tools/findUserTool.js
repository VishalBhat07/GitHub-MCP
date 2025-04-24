import { z } from "zod";
import { getUserByUsername } from "../controllers/userManipulation.js";

export default {
  name: "get-user-by-username",
  schema: {
    username: z.string().describe("GitHub username to fetch info for"),
  },
  handler: async ({ username }) => {
    const user = await getUserByUsername(username);
    return {
      content: [
        {
          type: "text",
          text: `Username: ${user.login}\nBio: ${user.bio || "N/A"}`,
        },
      ],
    };
  },
};
