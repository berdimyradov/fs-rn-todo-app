import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTaskScreen } from "pages/add-task";
import { TasksScreen } from "pages/list-tasks";
import { TaskScreen } from "pages/view-task-details";
import { RootStackParamList } from "shared";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Tasks">
        <RootStack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="Task" component={TaskScreen} />
        <RootStack.Group
          screenOptions={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        >
          <RootStack.Screen name="AddTask" component={AddTaskScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
