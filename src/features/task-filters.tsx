import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { taskModel } from "entities/task";
import { RadioButton, RadioButtonGroup, useTaskDispatch } from "shared";

const resetFilters = {
  all: false,
  open: false,
  closed: false,
};

export const TasksFilters = () => {
  const dispatch = useTaskDispatch();
  const isLoading = taskModel.selectors.areTasksLoading();

  const [radioMap, updateRadioMap] = useReducer(
    (_: Filters, n: keyof Filters) => ({
      ...resetFilters,
      ...{ [n]: true },
    }),
    { ...resetFilters, all: true }
  );

  const onRadioButtonPress = (key: keyof Filters) => {
    updateRadioMap(key);

    dispatch(
      taskModel.actions.setQueryConfig({
        completed: key === "all" ? undefined : key === "closed",
      })
    );
  };

  return (
    <View style={styles.container}>
      <RadioButtonGroup>
        {Object.keys(radioMap).map((key) => (
          <RadioButton
            key={key}
            label={`${key}:`}
            selected={radioMap[key as keyof Filters]}
            disabled={isLoading}
            onValueChange={(_) => onRadioButtonPress(key as keyof Filters)}
          />
        ))}
      </RadioButtonGroup>
    </View>
  );
};

type Filters = typeof resetFilters;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
});
