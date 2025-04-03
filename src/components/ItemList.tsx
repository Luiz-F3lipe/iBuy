import { Pressable, Text, View } from "react-native";
import { CheckCircle, CircleDashed, Trash } from "phosphor-react-native";
import { IListBuy } from "@/src/dtos/IListBuy";
import { colors } from "@/src/styles/colors";

type Props = {
  item: IListBuy;
  onRemove: () => void;
  onToggle: () => void;
}

export function ItemList({ item, onRemove, onToggle}: Props) {
  return (
    <View className="w-full flex-row justify-between items-center border-b-2 border-borderPrimary py-2">
      <Pressable 
        className="flex-row gap-2 items-center"
        onPress={onToggle}
      >
        {item.isCompleted
          ? <CheckCircle size={24} color={colors.accent} />
          : <CircleDashed size={24} color="black" />
        }
        <Text className="font-bold text-lg">
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={onRemove}
      >
        <Trash size={24} color="#EF4444" />
      </Pressable>
    </View>
  )
}