import { Request, Response } from "express";
import httpStatusCode from "../utils/enums";

const getAll = async (req: Request, res: Response) => {
  const data = { teste: 'teste' }

  res
    .status(httpStatusCode.OK)
    .json(data);
}

export default { getAll };