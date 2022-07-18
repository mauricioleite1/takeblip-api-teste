import axios from "axios";
import 'dotenv/config';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

const org = process.env.ORG || 'takenet';
const listAllRepositoriesEndpoint = `/orgs/${org}/repos`;

export { githubApi, listAllRepositoriesEndpoint };
