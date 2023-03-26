import { FC, PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RadioButtonGroupProps = PropsWithChildren<{}>;

type RadioButtonProps = {
  selected: boolean;
  label: string;
  disabled?: boolean;
  onValueChange?: (selected: boolean) => void;
};

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({ children }) => (
  <View className="flex-row w-full justify-evenly">{children}</View>
);

export const RadioButton = (props: RadioButtonProps) => {
  const { selected, label, disabled, onValueChange } = props;

  const handleOnPress = () => {
    !disabled && onValueChange && onValueChange(!selected);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={disabled}>
      <View className="flex-row items-center mr-2">
        {label ? (
          <Text className={`mr-2 capitalize ${disabled && "text-neutral-300"}`}>
            {label}
          </Text>
        ) : null}
        <View
          className={`justify-center items-center h-6 w-6 rounded-full border-2 ${
            disabled && "border-neutral-300"
          }`}
        >
          {selected ? (
            <View
              className={`h-3 w-3 rounded-full bg-black ${
                disabled && "bg-neutral-300"
              }`}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};
