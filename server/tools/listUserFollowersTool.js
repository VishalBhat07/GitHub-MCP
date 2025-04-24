import { z } from "zod";
import { listFollowers } from "../controllers/userManipulation.js";

export default {
  name: "list-followers",
  schema: {},
  handler: async () => {
    const followers = await listFollowers();
    const text = followers.map((f) => `- ${f.login}`).join("\n");
    return {
      content: [{ type: "text", text }],
    };
  },
};
