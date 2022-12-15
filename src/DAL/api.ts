import axios from "axios";

const baseURL = "https://api.telegram.org/";

const instance = axios.create({
  baseURL,
});

export const mailApi = {
  postMail(token: string, chat_id: string, parse_mode: string, text: string) {
    return instance.post(`bot${token}/sendMessage`, {
      chat_id,
      parse_mode,
      text,
    });
  },
};
