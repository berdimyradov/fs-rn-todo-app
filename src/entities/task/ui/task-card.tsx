import { StyleSheet, Text } from "react-native";
import type { Task } from "shared";

type Props = {
  task?: Task;
};

export const TaskCard = ({ task }: Props) => {
  if (!task) return null;

  const { id, title } = task;

  return (
    <>
      <Text style={styles.id}>Task#{id}</Text>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  id: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
  },
  title: {
    marginVertical: 16,
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
  },
});
