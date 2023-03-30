import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { TaskAddForm } from "features/task-add";
import { Modal } from "shared";
import type { NavProp, ScreenProps } from "shared";

export const AddTaskScreen: FC<ScreenProps<"AddTask">> = ({ route }) => {
  const { goBack } = useNavigation<NavProp<"AddTask">>();
  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <KeyboardAvoidingView behavior={behavior} className="flex-1">
      <Modal onBackdropPress={goBack}>
        <TaskAddForm onNewTaskAdded={goBack} />
      </Modal>
    </KeyboardAvoidingView>
  );
};
