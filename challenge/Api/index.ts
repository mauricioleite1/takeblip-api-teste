import axios from "axios";
import "dotenv/config";

const api = axios.create({
  baseURL: "https://api.github.com",
});

const language = "C#";
const org = process.env.ORG || "takenet";

const listAllEndpoint = `/orgs/${org}/repos`;

const settings = {
  sortBy: "created",
  direction: "asc",
};
const params = `?sort=${settings.sortBy}&direction=${settings.direction}`;

export { api, language, listAllEndpoint, params };