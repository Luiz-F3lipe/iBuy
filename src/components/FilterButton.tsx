import { Pressable, Text, PressableProps } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type Props = PressableProps & {
  isSelected?: boolean;
  variant: "Pending" | "Completed";
}

export function FilterButton({ isSelected = false, variant, ...rest }: Props) {
  return (
    <Pressable className="flex-row gap-2" {...rest}>
      {
        variant === "Pending"
          ? <FontAwesome6 name="square" size={20} color={ isSelected ? "black" : colors.textMuted } />
          : <FontAwesome6 name="square-check" size={20} color={ isSelected ? "black" : colors.textMuted } />
      }
      <Text className={isSelected ? "font-bold text-md" : "text-md font-regular text-textMuted"}>
        {variant === "Pending" ? "Pendentes" : "Comprados"}
      </Text>
    </Pressable>
  )
}