import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { taskModel } from "entities";

type Props = {
  taskId: number;
};

export const TaskFooter = ({ taskId }: Props) => {
  const task = taskModel.selectors.useTask(taskId);

  return (
    <View className="items-center">
      <Text>Task is owned by:</Text>
      <View className="flex-row">
        <Entypo name="user" size={24} color="black" />
        <Text className="pl-2 text-xl font-bold">{task.userId}</Text>
      </View>
    </View>
  );
};
