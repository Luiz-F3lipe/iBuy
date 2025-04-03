import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IListBuy } from "@/src/dtos/IListBuy";

type BuyStoreProps = {
  listBuy: IListBuy[];
  addItem: (title: string) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  cleanList: () => void;
}

export const useBuyStore = create(
  persist<BuyStoreProps>(
    (set) => ({
      listBuy: [] as IListBuy[],
      addItem: (title: string) => set((state) => ({
        listBuy: [
          ...state.listBuy,
          {
            id: String(new Date().getTime()),
            title,
            isCompleted: false,
          }
        ]
      })),
      removeItem: (id: string) => set((state) => ({
        listBuy: state.listBuy.filter((item) => item.id !== id)
      })),
      toggleItem: (id: string) => set((state) => ({
        listBuy: state.listBuy.map((item) =>
          item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        )
      })),
      cleanList: () => set(() => ({
        listBuy: []
      }))
    }),
    {
      name: "comprar:listBuy",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)