import { FlatList, StyleSheet } from "react-native";
import { ToggleTask } from "features";
import { TaskRow } from "entities/task";
import { Empty, Task } from "shared";

type Props = {
  data: Task[];
};

export const TaskList = ({ data }: Props) => (
  <FlatList
    data={data}
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <TaskRow data={item} before={<ToggleTask taskId={item.id} />} />
    )}
    ListEmptyComponent={<Empty desc="No tasks found" />}
  />
);

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
});
