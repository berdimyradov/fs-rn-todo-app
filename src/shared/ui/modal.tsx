import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = PropsWithChildren<{
  onBackdropPress: () => void;
}>;

export const Modal = ({ onBackdropPress, children }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backdrop} onPress={onBackdropPress} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 16,
  },
});
