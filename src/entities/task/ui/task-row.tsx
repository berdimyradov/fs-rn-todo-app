import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
      <View className="flex-row items-center h-12 bg-zinc-50 my-2 mx-4 rounded-lg shadow shadow-slate-300">
        {before}
        <Text
          numberOfLines={2}
          className={`flex-1 text-base pr-2 ${
            completed ? "line-through" : "no-underline"
          }`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
