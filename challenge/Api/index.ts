import axios from "axios";
import 'dotenv/config';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

const org = process.env.ORG || 'takenet';
const listAllRepositoriesEndpoint = `/orgs/${org}/repos`;

const settings = {
  sortBy: 'created',
  direction: 'asc'
}

const params = `?sort=${settings.sortBy}&direction=${settings.direction}`;

export {
  githubApi,
  listAllRepositoriesEndpoint,
  params,
};
