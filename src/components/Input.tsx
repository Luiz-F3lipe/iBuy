import { TextInput, View, TextInputProps } from "react-native";

type Props = TextInputProps

export function Input({ ...rest }: Props) {
  return (
    <View className="w-full h-14 px-4 bg-white rounded-lg border border-borderSecondary">
      <TextInput 
        className="flex-1 placeholder:text-textMuted font-regular"
        {...rest}
      />
    </View>
  )
}