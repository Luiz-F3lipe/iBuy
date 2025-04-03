import { Pressable, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
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
          ? <FontAwesome6 name="square-check" size={24} color={colors.accent} />
          : <FontAwesome6 name="square" size={24} color="black" />
        }
        <Text className="font-bold text-lg">
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={onRemove}
      >
        <FontAwesome6 name="trash-alt" size={24} color="#EF4444" />
      </Pressable>
    </View>
  )
}