import { ButtonProps, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ title, color, disabled, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      {...rest}
    >
      <Text style={[styles.title, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#6b7280",
  },
  disabledButton: {
    backgroundColor: "#d4d4d4",
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
