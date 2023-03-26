import { ActivityIndicator, View } from "react-native";

export const Loading = () => {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" />
    </View>
  );
};
