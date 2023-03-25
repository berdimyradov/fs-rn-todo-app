import { ButtonProps, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ title, color, disabled, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
      {...rest}
    >
      <Text style={[styles.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#6c757d",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
