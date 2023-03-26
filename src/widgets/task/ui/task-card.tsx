import { View } from "react-native";
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
    <View className="justify-around items-center h-72 w-56 py-6 px-2 bg-zinc-50 rounded-2xl shadow-lg">
      <TaskCard task={task} />
      <ToggleTask taskId={taskId} withStatus={true} />
    </View>
  );
};
