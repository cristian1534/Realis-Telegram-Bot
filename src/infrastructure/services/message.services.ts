import { handleMessage } from "../../infrastructure/helpers/api";
import { Request } from "express";

export const handler = async ({ body }: Request) => {
  try {
    if (body && body.message) {
      const messageObject = {
        chat_id: body.message.chat.id,
        message: body.message,
      };
      await handleMessage(messageObject);
    }
    return;
  } catch (error) {
    console.error(error);
  }
};
