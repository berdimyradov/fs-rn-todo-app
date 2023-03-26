import { PropsWithChildren } from "react";
import { Pressable, View } from "react-native";

type Props = PropsWithChildren<{
  onBackdropPress: () => void;
}>;

export const Modal = ({ onBackdropPress, children }: Props) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        className="absolute inset-0 bg-black opacity-75"
        onPress={onBackdropPress}
      />
      <View className="flex-1 w-full absolute bottom-0 bg-white p-4 rounded-t-3xl">
        {children}
      </View>
    </View>
  );
};
