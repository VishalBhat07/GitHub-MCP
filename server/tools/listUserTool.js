import { z } from "zod";
import { listUserRepos } from "../controllers/userManipulation.js";

export default {
  name: "list-user-repos",
  schema: {},
  handler: async () => {
    const repos = await listUserRepos();
    const text = repos.map((r) => `- ${r.name}: ${r.html_url}`).join("\n");
    return {
      content: [{ type: "text", text }],
    };
  },
};
