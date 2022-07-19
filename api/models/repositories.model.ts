import { api, listAllEndpoint, params } from "../challenge/Api";

const getAll = async () => {
  const { data } = await api.get(listAllEndpoint + params);

  return data;
};

export default { getAll };