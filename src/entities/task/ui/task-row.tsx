import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Task, NavProp } from "shared";

type TaskRowProps = {
  data: Task;
  before?: ReactNode;
};

export const TaskRow = ({ data, before }: TaskRowProps) => {
  const { id, title, completed } = data;
  const { navigate } = useNavigation<NavProp<"Tasks">>();

  const onTaskPress = () => navigate("Task", { id });

  return (
    <TouchableOpacity onPress={onTaskPress}>
      <View style={styles.container}>
        {before}
        <Text
          numberOfLines={2}
          style={[styles.title, completed && styles.completedTitle]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    shadowColor: "#cbd5e1",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    flex: 1,
    paddingRight: 8,
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "none",
  },
  completedTitle: {
    textDecorationLine: "line-through",
  },
});
