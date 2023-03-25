import type { Task } from "shared";

type TaskStatus = "Closed" | "Opened";

const getTaskStatus = (task: Task): TaskStatus => {
  return task.completed ? "Closed" : "Opened";
};

export const taskLib = {
  getTaskStatus,
};
