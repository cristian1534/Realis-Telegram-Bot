export interface IMessageObject {
  chat_id?: number;
}

export interface IMessage extends IMessageObject {
  message?: {
    text: string;
  };
}
