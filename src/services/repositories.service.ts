import repositoriesModel from "../models/repositories.model";

const getAll = async () => {
  const data = await repositoriesModel.getAll();

  return data;
}

export default { getAll };