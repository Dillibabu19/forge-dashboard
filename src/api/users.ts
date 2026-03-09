import { api } from "./axios";

export interface UserUpdate {
  email?: string;
  role_id?: string;
  is_active?: boolean;
}

export const get_users = async () => {
  const res = await api.get("/user");
  return res.data;
};

export const delete_user = async (user_id: string) => {
  const res = await api.delete(`/user/${user_id}`);
  return res.data;
};

export const update_user = async (id: string, payload: UserUpdate) => {
  const res = await api.put(`/user/${id}`, payload);
  return res.data;
};
