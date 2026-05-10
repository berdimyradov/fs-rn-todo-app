import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TaskAddForm } from "features/task-add";
import type { NavProp, ScreenProps } from "shared";
import { Modal } from "shared";

export const AddTaskScreen: FC<ScreenProps<"AddTask">> = ({ route }) => {
  const { goBack } = useNavigation<NavProp<"AddTask">>();
  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.container}>
      <Modal onBackdropPress={goBack}>
        <SafeAreaView>
          <TaskAddForm onNewTaskAdded={goBack} />
        </SafeAreaView>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
