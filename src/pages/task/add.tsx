import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { TaskAdd } from "features/task-add";
import { Modal } from "shared";
import type { NavProp, ScreenProps } from "shared/routes";

export const AddTaskScreen: FC<ScreenProps<"AddTask">> = ({ route }) => {
  const { goBack } = useNavigation<NavProp<"AddTask">>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Modal onBackdropPress={goBack}>
        <TaskAdd onNewTaskAdded={goBack} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
