import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import { TasksListWidget, TasksSummaryWidget } from "widgets/task";
import { TasksFilters } from "features";
import type { ScreenProps } from "shared";

export const TasksScreen: FC<ScreenProps<"Tasks">> = () => {
  return (
    <SafeAreaView className="flex-1">
      <TasksFilters />
      <TasksListWidget />
      <TasksSummaryWidget />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
