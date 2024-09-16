import { create } from "zustand";
import { Product } from "@/types/product/index.model";
import { IFilter } from "@/types/index.model";

interface AppState {
  basket: { product: Product; count: number }[];
  total: number;
  filter: IFilter;
  addToBasket: (product: Product) => void;
  removeFromBasket: (product: Product) => void;
  itemCountIncrement: (product: Product) => void;
  itemCountDecrement: (product: Product) => void;
  filterChange: (filter: IFilter) => void;
}

const useAppStore = create<AppState>((set) => ({
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),
  total: Number(localStorage.getItem("total")) || 0,
  filter: {},
  addToBasket: (product) =>
    set((state) => {
      const basketItem = state.basket.find(
        (item) => item.product.id === product.id
      );
      let newBasket;
      if (basketItem) {
        newBasket = state.basket.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        newBasket = [...state.basket, { product, count: 1 }];
      }
      const newTotal = state.total + Number(product.price);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      localStorage.setItem("total", newTotal.toString());
      return { basket: newBasket, total: newTotal };
    }),
  removeFromBasket: (product) =>
    set((state) => {
      const newBasket = state.basket
        .map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0);
      const newTotal = state.total - Number(product.price);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      localStorage.setItem("total", newTotal.toString());
      return { basket: newBasket, total: newTotal };
    }),
  itemCountIncrement: (product) =>
    set((state) => {
      const newBasket = state.basket.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
      const newTotal = state.total + Number(product.price);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      localStorage.setItem("total", newTotal.toString());
      return { basket: newBasket, total: newTotal };
    }),
  itemCountDecrement: (product) =>
    set((state) => {
      const newBasket = state.basket
        .map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0);
      const newTotal = state.total - Number(product.price);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      localStorage.setItem("total", newTotal.toString());
      return { basket: newBasket, total: newTotal };
    }),
  filterChange: (filter) => set({ filter }),
}));

export default useAppStore;
