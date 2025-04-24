import { getAuthenticatedUser } from "../controllers/userManipulation.js";

export default {
  name: "get-authenticated-user",
  schema: {},
  handler: async () => {
    const user = await getAuthenticatedUser();
    return {
      content: [
        {
          type: "text",
          text: `Authenticated as ${user.login} (${user.name || "no name"})`,
        },
      ],
    };
  },
};
