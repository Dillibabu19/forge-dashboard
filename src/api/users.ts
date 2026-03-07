import { api } from "./axios";

export const get_users = async () => {
  const res = await api.get("/user");
  return res.data;
};
