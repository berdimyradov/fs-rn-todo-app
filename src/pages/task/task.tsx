import { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { TaskCardWidget } from "widgets";
import { TaskFooter } from "features";
import type { ScreenProps } from "shared";

export const TaskScreen: FC<ScreenProps<"Task">> = ({ route }) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <TaskCardWidget taskId={route.params.id} />
      </View>
      <TaskFooter taskId={route.params.id} />
    </SafeAreaView>
  );
};
