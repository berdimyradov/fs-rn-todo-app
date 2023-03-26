import { Text } from "react-native";
import type { Task } from "shared";

type Props = {
  task?: Task;
};

export const TaskCard = ({ task }: Props) => {
  if (!task) return null;

  const { id, title } = task;

  return (
    <>
      <Text className="text-2xl font-semibold">Task#{id}</Text>
      <Text className="text-lg my-4 text-center">{title}</Text>
    </>
  );
};
