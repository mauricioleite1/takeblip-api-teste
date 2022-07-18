import repositoriesModel from "../models/repositories.model";
import { IRepository } from "../utils/interfaces";

const getAll = async () => {
  const data = await repositoriesModel.getAll();
  return data;
}

const getByLanguage = async (language: string) => {
  const data: IRepository[] = await repositoriesModel.getAll();
  const filteredData: IRepository[] = data
    .map(({ full_name, description, language }) => ({
      full_name,
      description,
      language,

    }))
    .filter((a) => a.language === language)
    .slice(0, 5)

  return filteredData;
}

export default { getAll, getByLanguage };