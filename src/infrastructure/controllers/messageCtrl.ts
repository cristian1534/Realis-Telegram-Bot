import { Request, Response } from "express";
import { handler } from "../services/message.services";
import { HttpResponse } from "../../infrastructure/errors/handle.errors";

export const sendMessageCtrl = async (
  req: Request,
  res: Response
): Promise<any> => {
  const httpResponse = new HttpResponse();

  try {
    await handler(req);
    return httpResponse.Ok(res, "Message sent successfully");
  } catch (err: any) {
    return httpResponse.InternalServerError(res, err);
  }
};
