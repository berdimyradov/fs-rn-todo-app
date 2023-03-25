import { API_URL } from "shared/config";

const BASE_URL = "/todos";

export type Task = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const getTasksList = async (): Promise<Task[]> => {
  const res = await fetch(`${API_URL}${BASE_URL}`, {});
  return await res.json();
};

const getTaskById = async (id: number): Promise<Task> => {
  const res = await fetch(`${API_URL}${BASE_URL}/${id}`);
  return await res.json();
};

export const tasks = {
  getTasksList,
  getTaskById,
};
