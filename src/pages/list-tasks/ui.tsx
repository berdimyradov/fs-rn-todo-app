import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TasksListWidget, TasksSummaryWidget } from "widgets/task";
import { TasksFilters } from "features";
import type { ScreenProps } from "shared";

export const TasksScreen: FC<ScreenProps<"Tasks">> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TasksFilters />
      <TasksListWidget />
      <TasksSummaryWidget />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
