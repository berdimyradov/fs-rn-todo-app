import { TaskFooter } from "features";
import { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import type { ScreenProps } from "shared/routes";
import { TaskCardWidget } from "widgets";

export const TaskScreen: FC<ScreenProps<"Task">> = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskCardWrapper}>
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
  taskCardWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
