import { taskLib, taskModel, useTaskDispatch } from "entities";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
      style={styles.checkbox}
      onValueChange={onToggle}
      value={task.completed}
    />
  );

  return withStatus ? (
    <TouchableOpacity style={styles.container} onPress={onToggle}>
      {checkbox}
      <Text style={styles.status}>{status}</Text>
    </TouchableOpacity>
  ) : (
    checkbox
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  checkbox: {
    marginHorizontal: 8,
  },
  status: {
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
