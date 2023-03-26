import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity } from "react-native";
import { taskLib, taskModel, useTaskDispatch } from "entities";

export type ToggleTaskProps = {
  taskId: number;
  withStatus?: boolean;
};

export const ToggleTask = ({ taskId, withStatus }: ToggleTaskProps) => {
  const dispatch = useTaskDispatch();
  const task = taskModel.selectors.useTask(taskId);

  if (!task) return null;

  const onToggle = () => dispatch(taskModel.actions.toggleTask(taskId));
  const status = taskLib.getTaskStatus(task);

  const checkbox = (
    <Checkbox
      className="mx-2"
      onValueChange={onToggle}
      value={task.completed}
    />
  );

  return withStatus ? (
    <TouchableOpacity className="flex-row" onPress={onToggle}>
      {checkbox}
      <Text className="font-bold uppercase">{status}</Text>
    </TouchableOpacity>
  ) : (
    checkbox
  );
};
