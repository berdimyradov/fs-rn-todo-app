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
          style={[
            styles.title,
            { textDecorationLine: completed ? "line-through" : "none" },
          ]}
        >
          {title}
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",

    // elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    flex: 1,
    fontSize: 15,
    paddingEnd: 8,
  },
});
