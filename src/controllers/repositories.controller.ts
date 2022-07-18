import { Request, Response } from "express";
import repositoriesService from "../services/repositories.service";

import { language } from "../../challenge/Api";
import { handleError } from "../utils/helpers";
import httpStatusCode from "../utils/enums";

const getAll = async (_req: Request, res: Response) => {
  try {
    const data = await repositoriesService.getAll();

    return res.status(httpStatusCode.OK).json(data);
  } catch (error: any) {
    handleError(error, res)
  }
};

const getByLanguage = async (_req: Request, res: Response) => {
  try {
    const data = await repositoriesService.getByLanguage(language);

    return res.status(httpStatusCode.OK).json(data);
  } catch (error: any) {
    handleError(error, res)
  }
};

export default { getAll, getByLanguage };