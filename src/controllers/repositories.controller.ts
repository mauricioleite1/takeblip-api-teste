import { Request, Response } from "express";
import { githubApi, listAllRepositoriesEndpoint, params } from "../../challenge/Api";
import httpStatusCode from "../utils/enums";

const getAll = async (_req: Request, res: Response) => {
  try {
    const { data } = await githubApi.get(listAllRepositoriesEndpoint + '?' + params);

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

export default { getAll };