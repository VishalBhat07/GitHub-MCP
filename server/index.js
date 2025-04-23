import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dotenv from "dotenv";
import addTool from "./tools/addTool.js";
import factorialTool from "./tools/factorialTool.js";
import createRepoTool from "./tools/createRepoTool.js";
import deleteRepoTool from "./tools/deleteRepoTool.js";

dotenv.config();

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

const tools = [addTool, factorialTool, createRepoTool, deleteRepoTool];

tools.forEach(({ name, schema, handler }) => {
  server.tool(name, schema, handler);
});

const transport = new StdioServerTransport();
await server.connect(transport);
