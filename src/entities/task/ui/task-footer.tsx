import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { taskModel } from "../model";

type Props = {
  taskId: number;
};

export const TaskFooter = ({ taskId }: Props) => {
  const task = taskModel.selectors.useTask(taskId);

  return (
    <View style={styles.container}>
      <Text>Task is owned by:</Text>
      <View style={styles.owner}>
        <Entypo name="user" size={24} color="black" />
        <Text style={styles.userId}>{task.userId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  owner: {
    flexDirection: "row",
  },
  userId: {
    paddingLeft: 8,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
  },
});
