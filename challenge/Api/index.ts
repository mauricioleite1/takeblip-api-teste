import axios from "axios";
import 'dotenv/config';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

const org = process.env.ORG || 'takenet';
const listAllRepositoriesEndpoint = `/orgs/${org}/repos`;

const settings = {
  quantity: 5,
  sortBy: 'created',
  direction: 'asc'
}

const params = `per_page=${settings.quantity}&sort=${settings.sortBy}&direction=${settings.direction}`;

export {
  githubApi,
  listAllRepositoriesEndpoint,
  params,
};
