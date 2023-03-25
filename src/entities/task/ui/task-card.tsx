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
      <Text style={styles.header}> Task#{id}</Text>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    marginVertical: 28,
    textAlign: "center",
  },
});
