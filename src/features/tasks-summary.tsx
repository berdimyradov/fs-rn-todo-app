import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { taskModel } from "entities";
import type { NavProp } from "shared/routes";

export const TasksSummary = () => {
  const numberOfTasks = taskModel.selectors.getFilteredTasks().length;
  const { navigate } = useNavigation<NavProp<"Tasks">>();

  const onAddToListPress = () => navigate("AddTask");

  return (
    <View style={styles.container}>
      <Text>Number of tasks: {numberOfTasks}</Text>
      <Entypo
        name="add-to-list"
        size={24}
        color="black"
        onPress={onAddToListPress}
      />
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
    borderColor: "#eee",
  },
});
