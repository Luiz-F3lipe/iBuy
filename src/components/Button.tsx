import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="w-full h-14 justify-center items-center bg-accent rounded-lg"
      activeOpacity={0.7}
      onPress={onPress}
      {...rest}
    >
      <Text className="text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}