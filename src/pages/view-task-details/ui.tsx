import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskCardWidget } from "widgets/task";
import { TaskFooter } from "entities/task";
import type { ScreenProps } from "shared";

export const TaskScreen: FC<ScreenProps<"Task">> = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TaskCardWidget taskId={route.params.id} />
      </View>
      <TaskFooter taskId={route.params.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
