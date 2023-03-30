import { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { taskModel } from "entities/task";
import type { Task } from "shared";
import { Button, Input, lib, useTaskDispatch } from "shared";

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
      <View className="h-60 justify-evenly">
        <Text className="text-xl font-bold text-center">New Task</Text>
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
