import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dotenv from "dotenv";

// Repo tools
import createRepoTool from "./tools/createRepoTool.js";
import deleteRepoTool from "./tools/deleteRepoTool.js";
import listReposTool from "./tools/listReposTool.js";
import getRepoDetailsTool from "./tools/getRepoDetailsTool.js";
import updateRepoTool from "./tools/updateRepoTool.js";
import starRepoTool from "./tools/starRepoTool.js";
import forkRepoTool from "./tools/forkRepoTool.js";
import addTopicsTool from "./tools/addTopicsTool.js";

// User tools
import getAuthenticatedUserTool from "./tools/getUserTool.js";
import updateUserProfileTool from "./tools/updateUserProfileTool.js";
import listFollowersTool from "./tools/listUserFollowersTool.js";

dotenv.config();

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

const tools = [
  createRepoTool,
  deleteRepoTool,
  listReposTool,
  getRepoDetailsTool,
  updateRepoTool,
  starRepoTool,
  forkRepoTool,
  addTopicsTool,
  getAuthenticatedUserTool,
  updateUserProfileTool,
  listFollowersTool,
];

tools.forEach(({ name, schema, handler }) => {
  server.tool(name, schema, handler);
});

const transport = new StdioServerTransport();
await server.connect(transport);
