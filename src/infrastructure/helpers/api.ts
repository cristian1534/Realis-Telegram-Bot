import { axiosCallInstance } from "./axios";
import { IMessage, IMessageObject } from "../../domain/message.entity";

const sendMessage = async (
  messageObject: IMessageObject,
  messageText: string
) => {
  try {
    const response = await axiosCallInstance.post("sendMessage", {
      chat_id: messageObject.chat_id,
      text: messageText,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error sending message:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const handleMessage = (messageObject: IMessage) => {
  const messageText = messageObject.message?.text || "";

  if (messageText.charAt(0) === "/") {
    const command = messageText.split(" ")[0].replace("/", "");
    const commandResponses: { [key: string]: string } = {
      start:
        "Hi, Please take few minutes of your value time to have a look into my personal details.",
      about:
        "I am a Full-Stack developer with experience specializing in Node.js and React, with expertise in building scalable applications, developing REST APIs, and implementing DevOps practices using Docker and microservices. I have successfully contributed to fintech and social projects, leading teams through Agile methodologies. I am excited about the opportunity to bring my technical skills and passion for innovation to your Company, and I look forward to discussing how I can contribute to your team's success.",
      linkedin:
        "This is my entire Professional Profile with working experience and education path: https://www.linkedin.com/in/cristian-machuca-dev/",
      github:
        "I will share with you some of my latest projects on coding here: https://github.com/cristian1534",
      resume:
        "Download my Resume here: https://drive.google.com/file/d/1gbU_BaCaZze_kpSY4jtvobPbGFdPFIm2/view?usp=drive_link",
      email:
        "I am looking forward to get some news about you. Please, feel free to contact me for any concern to my email: cmachuca32@gmail.com",
    };
    const response =
      commandResponses[command] ||
      "Please, choose some valid command to help you.";

    return sendMessage(messageObject, response);
  } else {
    return sendMessage(
      messageObject,
      "Please, choose a command to help you with pressing '/'"
    );
  }
};
