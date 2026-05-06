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
          <Text style={[styles.label, disabled && styles.disabledText]}>
            {label}
          </Text>
        ) : null}
        <View
          style={[styles.control, disabled && styles.disabledControl]}
        >
          {selected ? (
            <View
              style={[styles.dot, disabled && styles.disabledDot]}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  label: {
    marginRight: 8,
    textTransform: "capitalize",
  },
  disabledText: {
    color: "#d4d4d4",
  },
  control: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderRadius: 9999,
    borderWidth: 2,
  },
  disabledControl: {
    borderColor: "#d4d4d4",
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 9999,
    backgroundColor: "#000000",
  },
  disabledDot: {
    backgroundColor: "#d4d4d4",
  },
});
