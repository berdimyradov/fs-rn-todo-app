import { TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps) => {
  return <TextInput className="h-10 my-3 p-2.5 border" {...props} />;
};
