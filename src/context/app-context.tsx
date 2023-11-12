import { Product } from "@/types/product/index.model";
import { createContext, useEffect, useState } from "react";

interface AppContextType {
  basket: { product: Product; count: number }[];
  total: number;
  addToBasket: (product: Product) => void;
  removeFromBasket: (product: Product) => void;
  itemCountIncrement: (product: Product) => void;
  itemCountDecrement: (product: Product) => void;
}

const initialState: AppContextType = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket") || "[]")
    : [],
  total: localStorage.getItem("total")
    ? Number(localStorage.getItem("total"))
    : 0,
  addToBasket: () => {},
  removeFromBasket: () => {},
  itemCountIncrement: () => {},
  itemCountDecrement: () => {},
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<{ product: Product; count: number }[]>(
    initialState.basket
  );
  const [total, setTotal] = useState(initialState.total);

  // Update local storage whenever basket or total changes
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("total", total.toString());
  }, [basket, total]);

  const addToBasket = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { product, count: 1 }]);
    }

    setTotal(total + Number(product.price));
  };

  const removeFromBasket = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count--;
      setBasket([...basket]);
    }

    setTotal(total - Number(product.price));
  };

  const itemCountIncrement = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count++;
      setBasket([...basket]);
    }
  };

  const itemCountDecrement = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count--;
      setBasket([...basket]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        basket,
        total,
        addToBasket,
        itemCountDecrement,
        itemCountIncrement,
        removeFromBasket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };