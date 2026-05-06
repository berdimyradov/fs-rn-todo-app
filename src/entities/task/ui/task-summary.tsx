import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { taskModel } from "../model";

type Props = {
  actionItem?: ReactNode;
};

export const TasksSummary = ({ actionItem }: Props) => {
  const numberOfTasks = taskModel.selectors.getFilteredTasks().length;

  return (
    <View style={styles.container}>
      <Text>Number of tasks: {numberOfTasks}</Text>
      {actionItem}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
});
