import { StyleSheet, Text, View } from "react-native";

type Props = {
  desc: string;
};

export const Empty = ({ desc }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  text: { fontSize: 18, textAlign: "center" },
});
