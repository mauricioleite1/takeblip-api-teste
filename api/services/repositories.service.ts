import repositoriesModel from "../models/repositories.model";
import { IRepository, IRepositoriesList } from "../utils/interfaces";

const getAll = async () => {
  const data = await repositoriesModel.getAll();
  return data;
};

const getByLanguage = async (language: string) => {
  const data: IRepositoriesList = await repositoriesModel.getAll();

  const onlyFiveReposByLanguage: IRepositoriesList = data
    .filter((repository) => repository.language === language)
    .slice(0, 5)
    .map(({ full_name, description, language, owner: { avatar_url } }: IRepository) => ({
      full_name,
      description,
      language,
      owner: { avatar_url },
    }));

  return onlyFiveReposByLanguage;
};

export default { getAll, getByLanguage };