import { githubApi, listAllRepositoriesEndpoint, params } from "../../challenge/Api";

const getAll = async () => {
  const { data } = await githubApi.get(listAllRepositoriesEndpoint + '?' + params);  
  return data;
}

export default { getAll };