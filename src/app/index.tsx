import { useMemo, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native"
import { useBuyStore } from "@/src/store/useBuyStore";

import Logo from "../assets/comprar_icon.png";

import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { FilterButton } from "@/src/components/FilterButton";
import { ItemList } from "@/src/components/ItemList";

type IListFilterButton = {
  id: number;
  variant: "Pending" | "Completed";
}

const listFilterButton: IListFilterButton[] = [
  {
    id: 1,
    variant: "Pending",
  },
  {
    id: 2,
    variant: "Completed",
  }
]

export default function Index() {
  const {
    listBuy,
    addItem,
    removeItem,
    toggleItem,
    cleanList,
  } = useBuyStore()
  const [idFilterSelected, setIdFilterSelected] = useState(1);
  const [title, setTitle] = useState("");

  const filterList = useMemo(() => {
    if (idFilterSelected === 1) {
      return listBuy.filter((item) => !item.isCompleted);
    }

    return listBuy.filter((item) => item.isCompleted);
  }, [listBuy, idFilterSelected])

  function handleAddItem() {
    if (!title.trim()) {
      return;
    }
    addItem(title);
    setTitle("");
  }

  return (
    <View className="flex-1 bg-background">
      <View className="items-center px-6 mb-6">
      <Image
        source={Logo}
        className="w-36 h-9 mt-14 mb-10"
      />

      <View className="w-full gap-2">
        <Input
        value={title}
        onChangeText={setTitle}
        placeholder="O que você deseja comprar?"
        onSubmitEditing={handleAddItem}
        returnKeyType="send"
        />

        <Button
        title="Adicionar"
        onPress={handleAddItem}
        />
      </View>
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-6 pt-8">
      <View className="flex-row items-center justify-between pb-4 border-b-2 border-borderPrimary rounded-lg">
        <View className="flex-row gap-2">
        {
          listFilterButton.map((item) => (
            <FilterButton
              key={item.id}
              variant={item.variant}
              isSelected={idFilterSelected === item.id}
              onPress={() => setIdFilterSelected(item.id)}
            />
          ))
        }
        </View>

        <Pressable onPress={cleanList}>
        <Text className="font-bold text-textMuted">
          Limpar
        </Text>
        </Pressable>
      </View>

      <View className="flex-1">
        <FlatList
        data={filterList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemList
          item={item}
          onRemove={() => removeItem(item.id)}
          onToggle={() => toggleItem(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <Text className="text-center text-textMuted font-bold text-lg mt-2">
            Nenhum item adicionado
          </Text>
        )}
        contentContainerClassName="gap-4 mt-4 pb-10"
        showsVerticalScrollIndicator={false}
        />
      </View>
      </View>
    </View>
  )
}