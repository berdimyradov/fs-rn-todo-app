import { taskModel, useTaskDispatch } from "entities";
import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, RadioButtonGroup } from "shared";

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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});

type Filters = typeof resetFilters;
