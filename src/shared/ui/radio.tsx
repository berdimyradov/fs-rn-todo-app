import { FC, PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RadioButtonGroupProps = PropsWithChildren<{}>;

type RadioButtonProps = {
  selected: boolean;
  label: string;
  disabled?: boolean;
  onValueChange?: (selected: boolean) => void;
};

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({ children }) => (
  <View style={styles.group}>{children}</View>
);

export const RadioButton = (props: RadioButtonProps) => {
  const { selected, label, disabled, onValueChange } = props;

  const handleOnPress = () => {
    !disabled && onValueChange && onValueChange(!selected);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={disabled}>
      <View style={styles.container}>
        {label ? (
          <Text style={[styles.label, disabled && styles.labelDisabled]}>
            {label}
          </Text>
        ) : null}
        <View style={[styles.radio, disabled && styles.radioDisabled]}>
          {selected ? (
            <View style={[styles.dot, disabled && styles.dotDisabled]} />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  group: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 8,
  },
  label: {
    marginEnd: 8,
    textTransform: "capitalize",
  },
  labelDisabled: {
    color: "#cccccc",
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioDisabled: {
    borderColor: "#cccccc",
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000000",
  },
  dotDisabled: {
    backgroundColor: "#cccccc",
  },
});
