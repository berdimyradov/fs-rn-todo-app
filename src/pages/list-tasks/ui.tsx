import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import { TaskList } from "widgets";
import { TasksFilters, TasksSummary } from "features";
import { taskModel } from "entities/task";
import { Loading, useTaskDispatch } from "shared";
import type { ScreenProps } from "shared";

export const TasksScreen: FC<ScreenProps<"Tasks">> = () => {
  return (
    <SafeAreaView className="flex-1">
      <TasksFilters />
      <TasksList />
      <TasksSummary />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

function TasksList() {
  const dispatch = useTaskDispatch();
  const { isFetching } = taskModel.getTasksListAsync()(dispatch);
  const filteredTasks = taskModel.selectors.getFilteredTasks();

  if (isFetching) return <Loading />;

  return <TaskList data={filteredTasks} />;
}
