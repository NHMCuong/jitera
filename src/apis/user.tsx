import axios from "axios";

export const getListUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const getAvatar = (userName: string) => {
  return axios.get(
    `https://avatars.dicebear.com/v2/avataaars/${userName}.svg?options[mood][]=happy`
  );
};
