import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
  const data = { teste: 'teste' }

  res.status(200).json(data);
}

export default { getAll };