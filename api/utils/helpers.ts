import { Response } from "express";
import httpStatusCode from "./enums";

export const handleError = (error: any, res: Response) => {
  const { response: { status, data }} = error;

  if (status) return res.status(status).json({ message: data.message });

  const message = "Não foi possível concluir a requisição";
  return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ message });
}