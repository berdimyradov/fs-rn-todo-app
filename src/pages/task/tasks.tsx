import { taskModel, TaskRow, useTaskDispatch } from "entities";
import { StatusBar } from "expo-status-bar";
import { TasksFilters, TasksSummary, ToggleTask } from "features";
import { FC } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Empty, Loading } from "shared";
import { ScreenProps } from "shared/routes";

export const TasksScreen: FC<ScreenProps<"Tasks">> = () => {
  return (
    <SafeAreaView style={styles.container}>
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

  return (
    <FlatList
      data={filteredTasks}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskRow data={item} before={<ToggleTask taskId={item.id} />} />
      )}
      ListEmptyComponent={<Empty desc="No tasks found" />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    minHeight: "100%",
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
});
