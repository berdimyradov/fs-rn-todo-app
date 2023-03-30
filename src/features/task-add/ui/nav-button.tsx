import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavProp } from "shared";

export const NavigateToTaskAddButton = () => {
  const { navigate } = useNavigation<NavProp<"Tasks">>();

  const onAddToListPress = () => navigate("AddTask");

  return (
    <Entypo
      name="add-to-list"
      size={24}
      color="black"
      onPress={onAddToListPress}
    />
  );
};
