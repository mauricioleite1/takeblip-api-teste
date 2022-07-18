import repositoriesModel from "../models/repositories.model";
import { IRepositoriesList } from "../utils/interfaces";

const getAll = async () => {
  const data = await repositoriesModel.getAll();
  return data;
};

const getByLanguage = async (language: string) => {
  const data: IRepositoriesList = await repositoriesModel.getAll();
  const onlyFiveReposByLanguage: IRepositoriesList = data
    .filter((a) => a.language === language)
    .map(({ full_name, description, language, owner: { avatar_url } }) => ({
      full_name,
      description,
      language,
      owner: {
        avatar_url,
      },
    }))
    .slice(0, 5);

  return onlyFiveReposByLanguage;
};

export default { getAll, getByLanguage };
