import { Request, Response } from "express";
import repositoriesService from "../services/repositories.service";
import httpStatusCode from "../utils/enums";

const getAll = async (_req: Request, res: Response) => {
  try {
    const data = await repositoriesService.getAll();

    res
      .status(httpStatusCode.OK)
      .json(data);
  }
  catch (error) {
    res
      .status(httpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor' });
  }
}

const getByLanguage = async (_req: Request, res: Response) => {
  try {
    const language = 'C#';
    const data = await repositoriesService.getByLanguage(language);

    res
      .status(httpStatusCode.OK)
      .json(data);
  }
  catch (error) {
    res
      .status(httpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor' });
  }
}

export default { getAll, getByLanguage };