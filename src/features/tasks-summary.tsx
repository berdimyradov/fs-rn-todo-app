import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { taskModel } from "entities/task";
import type { NavProp } from "shared";

export const TasksSummary = () => {
  const numberOfTasks = taskModel.selectors.getFilteredTasks().length;
  const { navigate } = useNavigation<NavProp<"Tasks">>();

  const onAddToListPress = () => navigate("AddTask");

  return (
    <View className="flex-row justify-between items-center py-2 px-6 border-t border-neutral-100">
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
