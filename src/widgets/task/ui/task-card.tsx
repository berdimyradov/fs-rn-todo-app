import { StyleSheet, View } from "react-native";
import { ToggleTask } from "features";
import { TaskCard, taskModel, useTaskDispatch } from "entities";
import { Loading } from "shared";

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
    borderRadius: 16,
    backgroundColor: "#fafafa",
    paddingVertical: 24,
    paddingHorizontal: 8,
    height: 280,
    width: 220,
    justifyContent: "space-around",
    alignItems: "center",

    // elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});
