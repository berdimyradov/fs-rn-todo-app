import { StyleSheet, View } from "react-native";
import { ToggleTask } from "features";
import { TaskCard, taskModel } from "entities/task";
import { Loading, useTaskDispatch } from "shared";

type Props = {
  taskId: number;
};

export const TaskCardWidget = ({ taskId }: Props) => {
  const dispatch = useTaskDispatch();
  const task = taskModel.selectors.useTask(taskId);
  const { isFetching } = taskModel.getTaskByIdAsync(taskId)(dispatch);

  if (isFetching) return <Loading />;

  return (
    <View style={styles.container}>
      <TaskCard task={task} />
      <ToggleTask taskId={taskId} withStatus={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 288,
    width: 224,
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: "#fafafa",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
});
