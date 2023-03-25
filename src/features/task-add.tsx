import { taskModel, useTaskDispatch } from "entities";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import type { Task } from "shared";
import { Button, Input, lib } from "shared";

type Props = {
  onNewTaskAdded?: (task: Task) => void;
};

export const TaskAdd = ({ onNewTaskAdded }: Props) => {
  const dispatch = useTaskDispatch();
  const [newTask, setNewTask] = useState<Task>({
    id: lib.randomIntFromInterval(201, 999),
    userId: lib.randomIntFromInterval(1, 10),
    title: "",
    completed: false,
  });

  const onAddButtonPress = () => {
    dispatch(taskModel.actions.addTaskToList(newTask));
    onNewTaskAdded && onNewTaskAdded(newTask);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>New Task</Text>
        <Input
          placeholder="Enter task"
          value={newTask.title}
          onChangeText={(value) => setNewTask((p) => ({ ...p, title: value }))}
        />
        <Button
          onPress={onAddButtonPress}
          title="Add"
          disabled={!newTask.title}
          accessibilityLabel="Add new task button"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
